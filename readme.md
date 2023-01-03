# Assignment 2 - Web API.

Name: Jason Anca (20093653)

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 -  New API Routes for the pages

 + Feature 2 - Storing new users on MongoDB

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/jason-anca/wad-api-labs-2022.git
```

followed by installation

```bat
npm install react-scripts
npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
npm install --save-dev nodemon
npm install dotenv --save
npm install --save-dev eslint babel-eslint
npx eslint --init
npx eslint index.js
npm install eslint eslint-plugin-react --save-dev
npx eslint index.js --fix
npm init
npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
npm install --save dotenv express
npm install --save uniqid
mongod -dbpath db
npm install -save mongoose
npm install express-async-handler --save
npm install --save express-session
npm install -s node-fetch@2
cd movies-api/
npm install
cd movies-app
npm install

```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

The .env should look something like the following and the tmdb api key:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=ilikecake

```

## API Design
Give an overview of your web API design, perhaps similar to the following: 

Not all work as intended but the following is attempted

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/tmdb/upcomingMovies | Gets upcoming movies | N/A | N/A | N/A
| /api/movies/tmdb/popularMovies | Gets popular movies | N/A | N/A | N/A
| /api/movies/tmdb/topRatedMovies | Gets top rated movies | N/A | N/A | N/A
| /api/users | Gets users | user log in | N/A | N/A
| /api/users/{userid} | Gets single user | N/A | N/A
| /api/users?action=register | N/A | registering a user | N/A | N/A

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. 

JSON Bearer Tokens are created when a user signs up. 

**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App:

In this assignment I combind the previous assignment's React App with the api labs and built on said labs in order for them to interact. I removed seed data for the app and allowed the new created users to be stored in the local database through mongo/mongoose. The app was updated to use the new movies-api that was added rather than using the tmdb-api that was used previously.

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcoming = () => {
    return fetch(
       '/api/movies/tmdb/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getPopularMovies = () => {
    return fetch(
       '/api/popularMovies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/movies/tmdb/topratedMovies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

None

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

None