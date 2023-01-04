# fe-restaurant-playlists

Sleigh-ers final project frontend repo

YMCA rulez!

## Setting up environment variables

The API key needs to be set in an environment variable, to protect it from exposure on GitHub.

First, create a file in the root directory called `.env`. Write this in the file: `REACT_APP_API_KEY="your_api_key"`, filling in the API key (at time of writing, a1v0 owns the API key).

To access this variable, simply add this to your file:

```js
const API_KEY = process.env.REACT_APP_API_KEY
```
