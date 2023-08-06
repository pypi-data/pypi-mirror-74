# ytutils
YouTube video details extractor

## Features
	- Extract video details
	
## Installation
```
pip install ytutils
```

## Importing
```
from ytutils.Video import Video
```

## Step-1
```
api_key = "YOUR API KEY"
vid = Video(api_key)
```

## Step-2
```
try:
	vid.start(video_url="https://youtube.com?watch=544gh5gK")
except:
	pass
	# Error occurred
```	

## Step-3
```
details = vid.result()
print(details)
```