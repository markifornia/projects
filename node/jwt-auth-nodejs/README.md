[https://www.youtube.com/watch?v=mbsmsi7l3r4](JWT Authentication Tutorial - Node.js) by Web Dev Simplified

JSON web tokens are one popular way to secure applications, especially micro-services.

### JWT Authentication using nodeJS
- create tokens
- send tokens to users
- Authenticaticate those tokens on our server

### Refresh tokens
- increase security
- revoke users


#### Initialize with NPM
```
npm init -y
```


#### Install express server, JSON web token, dotenv for environment variables
``` 
npm install express jsonwebtoken dotenv
```

#### Install dev dependency
Refresh server after each change
```
npm install --save-dev nodemon
```

#### package.json
```
"scripts": {
    "devStart": "nodemon server.js",
}
```

### Generating randomized access tokens
```
$ node
> require('crypto').randomBytes(64).toString('hex')
```


