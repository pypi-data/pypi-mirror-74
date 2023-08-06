# contentai-extractor-runtime-python

This is a python package used for implementing a custom extractor that runs on the ContentAI platform.

https://pypi.org/project/contentaiextractor/

### Usage

```sh
pip install contentaiextractor
```

```python
import contentaiextractor as contentai

# download content locally
content_path = contentai.download_content()

# access metadata that was supplied when running a job
# contentai run s3://bucket/video.mp4 -d '{ "input": "value" }'
inputData = contentai.metadata()["input"]

# get output from another extractor
csv = contentai.get("extractor", "data.csv")
json = contentai.get_json("extractor", "data.json")

# extract some data
outputData = []
outputData.append({"frameNumber": 1})

# output data from this extractor
contentai.set("output", outputData)
```

### [API Documentation](apidocs.md)


### Develop

```
 Choose a make command to run

  build    build package
  deploy   upload package to pypi
  docs     generates api docs in markdown
```
