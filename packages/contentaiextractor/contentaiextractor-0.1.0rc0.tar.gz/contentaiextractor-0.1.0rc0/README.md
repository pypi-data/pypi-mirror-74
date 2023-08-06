# contentai-extractor-runtime-python

This is a python package used for implementing a custom extractor that runs on the ContentAI platform.

### Usage

```sh
pip install contentaiextractor
```

```python
import contentaiextractor as contentai

# download content locally
content_path = contentai.download_content()

# access metadata that was supplied when running a job
# contentai run s3://bucket/video.mp4 -d '{ "param: "value" }'
param = contentai.metadata()["param"]

# get another extractor's output
data = contentai.get_results("some_extractor", "data.json")

print(f"write results to {contentai.result_path}")
```

### [API Documentation](apidocs.md)


### Develop

```
 Choose a make command to run

  build    build package
  deploy   upload package to pypi
  docs     generates api docs in markdown
```
