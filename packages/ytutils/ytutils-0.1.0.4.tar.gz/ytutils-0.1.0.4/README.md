# ytutils
YouTube video & channel details extractor


## Pypi Website
- [ytutils](https://pypi.org/project/ytutils)


## Features
- Extract video details
- Extract channel details


## Installation
```bash
pip install ytutils
```


## Video Extraction

### Importing
```python
from ytutils.Video import Video
```

### Step-1
```python
api_key = "YOUR API KEY"
vid = Video(api_key)
```

### Step-2
```python
try:
	vid.start(video_url="https://www.youtube.com/watch?v=hW7qJZK2UAc") # Or vid.start(video_id="hW7qJZK2UAc")
except:
	pass # Error occurred
```	

### Step-3
```python
details = vid.result()
print(details['title'])
```


## Channel Extraction

### Importing
```python
from ytuils.Channel import Channel
```

### Step-1
```python
api_key = "YOUR API KEY"
cha = Channel(api_key)
```

### Step-2
```python
try:
	cha.start(channel_url="https://www.youtube.com/channel/UC_yAFedtY2po4noljIqSM1w") # Or cha.start(channel_id="UC_yAFedtY2po4noljIqSM1w")
except:
	pass # Error Occurred
```

### Step-3
```python
details = cha.result()
print(details['title'])
```


## Contact me
- [Twitter](https://twitter.com/SanjayDevTech)
