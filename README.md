# Fullstack-Project

## Setup
```
npm init -y
npm install express
npm install --save-dev nodemon
```
--save-dev nodemon will restart the node server whenever there is an update in my code.

In the package.json file which is created when executing 'npm init -y', you can add to scripts:
```
"start": "nodemon app.js"
```
nodemon will start the server by starting app.js file.
