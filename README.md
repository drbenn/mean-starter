# MeanStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Basic MEAN Setup

1.  a. Node-> Express: Create server.js in root directory, generic working code included

b. Install express npm i --save express

c. create backend folder in root directory and app.js to incorporate express

d. npm i --save-dev nodemon, update package.json scripts with "start:server": "nodemon server.js", which can be run in terminal with 'npm run start:server'

e. now once server is setup and running, you should be able to go to the localhost:5000/api/posts to see the tests posts listed on the server via const posts in app.js available for grabbing by angular

2. Connect Angular to grab server data
   a. import HttpClientModule in app.module
   b. in data service import HttpClient and use this.http to communicate with server via GET/POST/PATCH/etc through methods on front end.

3. Setup MongoDB

4. Install/Setup Mongoose
   a. npm i --save mongoose
   b. Create model post.js in new model folder in backend folder
   c. Create Mongoose schema and model in backend>models>post.js
   d. update app.js to include new Post model, mongoose and mongoDB storage location
