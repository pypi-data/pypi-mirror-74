from requests import session
from caltechdata_api import customize_schema
import json
import os
import boto3


def send_s3(filepath, token, production=False):

    if production == True:
        s3surl = "https://data.caltech.edu/tindfiles/sign_s3/"
        chkurl = "https://data.caltech.edu/tindfiles/md5_s3"
    else:
        s3surl = "https://cd-sandbox.tind.io/tindfiles/sign_s3/"
        chkurl = "https://cd-sandbox.tind.io/tindfiles/md5_s3"

    headers = {"Authorization": "Bearer %s" % token}

    c = session()

    response = c.get(s3surl, headers=headers)
    jresp = response.json()
    data = jresp["data"]

    bucket = jresp["bucket"]
    key = data["fields"]["key"]
    policy = data["fields"]["policy"]
    aid = data["fields"]["AWSAccessKeyId"]
    signature = data["fields"]["signature"]
    url = data["url"]

    print(filepath)
    infile = open(filepath, "rb")
    size = infile.seek(0, 2)
    infile.seek(0, 0)  # reset at beginning

    s3 = boto.client("s3")
    s3.upload_file(filepath, bucket, key)

    response = c.get(chkurl + "/" + bucket + "/" + key, headers=headers)
    print(response)
    exit()

    s3headers = {
        "Host": bucket + ".s3.amazonaws.com",
        "Date": "date",
        "x-amz-acl": "public-read",
        "Access-Control-Allow-Origin": "*",
    }

    form = (
        ("key", key),
        ("acl", "public-read"),
        ("AWSAccessKeyID", aid),
        ("policy", policy),
        ("signature", signature),
        ("file", infile),
    )

    c = session()
    response = c.post(url, files=form, headers=s3headers)
    if response.text:
        raise Exception(response.text)

    response = c.get(chkurl + "/" + bucket + "/" + key, headers=headers)
    md5 = response.json()["md5"]
    filename = filepath.split("/")[-1]

    fileinfo = {"url": key, "filename": filename, "md5": md5, "size": size}

    return fileinfo


def caltechdata_write(metadata, token, files=[], production=False):

    # If files is a string - change to single value array
    if isinstance(files, str) == True:
        files = [files]

    fileinfo = []

    for f in files:
        fileinfo.append(send_s3(f, token, production))

    if production == True:
        url = "https://data.caltech.edu/submit/api/create/"
    else:
        url = "https://cd-sandbox.tind.io/submit/api/create/"

    headers = {"Authorization": "Bearer %s" % token, "Content-type": "application/json"}

    newdata = customize_schema.customize_schema(metadata)
    newdata["files"] = fileinfo
    if "doi" not in newdata:
        # We want tind to generate the identifier
        newdata["final_actions"] = [
            {"type": "create_doi", "parameters": {"type": "records", "field": "doi"}}
        ]

    dat = json.dumps({"record": newdata})

    c = session()
    response = c.post(url, headers=headers, data=dat)
    return response.text
