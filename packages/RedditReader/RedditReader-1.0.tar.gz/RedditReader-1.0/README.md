# RedditReader
RedditReader is a package to get random images from any Subreddit available on Reddit.

# Usage
## Subreddit Class
```python
from RedditReader import Subreddit

meme = Subreddit("memes")
meme.get_random()
url = meme.url
print(url)

> https://i.redd.it/tunx3ghxjqb51.jpg
```

Attributes available for RedditReader.Subreddit obejct -
```
url - Returns submission url
title - Returns submission title
upvotes - Returns upvote count of the submission
comments - Returns comment count of the submission
```