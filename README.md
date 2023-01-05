# Munchify

## Summary

|                          |     |                                                            |
| ------------------------ | --- | ---------------------------------------------------------- |
| **Deployed URL**         | :   | tbc                                                        |
| **Backend API**          | :   | tbc                                                        |
| **Backend repo**         | :   | <https://github.com/Cnmoosavinia/be-restaurant-playlists/> |
| **Minimum Node version** | :   | 19.0.0                                                     |

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

### Auth0

Auth0 setup has been complete with <Auth0Provider> wrapped around <App> on the index.tsx page. To conncect with your own Auth0 account if you wish to host yourself make sure to update:

domain="your domain key"
clientId="your clientId"

Both these peices of info are obtained from your Auth0 application

To make use of Auth0 the user detals are stored in a React context created by Auth0 called useAuth0();

With this you can acces user which is an object containing the logged in users details and isAuthenitcated with is a boolean confirming if a user is logged on or not. These are available in all components as Auth0 stores this information in the <Auth0Provider>
