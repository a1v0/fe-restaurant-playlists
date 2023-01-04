# Munchify

## Summary

||||
|-|-|-|
|**Deployed URL**|:|tbc|
|**Backend API**|:|tbc|
|**Backend repo**|:|<https://github.com/Cnmoosavinia/be-restaurant-playlists/>|
|**Minimum Node version**|:|19.0.0|

This web app is the frontend for our Munchify website for restaurant playlists. It's a collaboration between `yos244`, `moshkh`, `Cnmoosavinia` and `a1v0`, aka YMCA.

Visitors can view playlists, filter them by cuisine and/or location; login via a Google authenticator; and create/edit playlists. Restaurant info is taken from the Google Maps API.

## Running the site locally

To begin with, run `npm install` to download all required packages.

### Setting up environment variables

The API key needs to be set in an environment variable, to protect it from exposure on GitHub (the key was uploaded in a previous commit, but that key is now obsolete).

First, create a file in the root directory called `.env`. Write this in the file:

```shell
REACT_APP_API_KEY="<your_api_key>"
```

To access this variable in your JavaScript code, simply add this to your file:

```js
const API_KEY = process.env.REACT_APP_API_KEY!;
// the exclamation mark is some TypeScript thing that
// reassures the compiler that the value of API_KEY is
// never going to be null (or something like that)
```

### Starting the server

Before you can run the website, make sure you have your backend set up. Open the backend repo in the terminal and run `flask run`.

This having been done, you can run `npm start` in a separate terminal to run the frontend.
