# DispatchBot
Passenger Registration Application

An anonymous user can register their name, address, phone number, and social security number. This information is saved to the database that is accessed by other applications. For this reason, the backend API is built with Ruby/Rails. It allows my backend API to serve up JSON data on its own while frontend APIs consume that information.

For the database, postgreSQl is used mainly die to its flexibility. PostgreSQL is designed for high volume and open-sourced. No licensing contraints restrict use, and the community thrives. With the hypothetical notion that we may at some juncture prefer to tweak the performance of postgreSQL, we have the ability to do so (unlike SQlite, for instance, which comes as is and is not open-sourced). The support community is large and accessible 24/7. This is helpful for a junior developer like myself. 

For the frontend API, I am using AngularJS. Because the scope of the project requires we create a single page application, Angular allows for two-way-data-binding (no refreashing of the page needed).

Testing: this is probably the most challenging part for me. I've included Karma and Jasmine. These were chosen after researching the Angular documentation and reading about these frameworks therein. Karma serves as my test server. Jasmine provides a library to help write the tests. Currently, I'm still researching how to test functions with this tool, but I've managed to test variables within my controller. I'll also be trying to create my own tests in hope of reaching MVP.

### How to use this application with a Mac:

First, make sure you have node, npm, and nodemon installed. 

```
$ node -v
```

```
$npm -v
```

If you dont, here's [a good tutorial](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew) using homebrew. 

```
$npm install nodemon
```

### Whoo hoo!
Once you have these installed, clone my repo if you'd like, cd into passenger_app_client, and `$ npm install`. this should install all the packages required to run the passenger registration app in your local environment. Let's start our server with `$ nodemon`, and open a new tab in terminal.

### Time for the backend.
make sure you have ruby and rails installed. 
`$ cd passenger_app_api` -- go ahead and `$ db:seed`. This should populate your database with fake data from faker. I chose faker because it's whimsical and highly effective in creating data to play with quickly. `$ rails s` to start our server.

### Browsers.
In your browser, navigate to localhost:3000/users and localhost:4040 separately. The first should return ten entries from our backend, and the second should display our form:) If it doesnt...call me immediately. 9377187997.

## Let's use it, shall we?
---

### Search
The application starts with no assumptions about the user. It asks for a full name and a social security number. Your name must be longer than 2 characters, and your social must be between 9 and 11 characters. You'll see an error otherwise. Upon clicking "Search", you credentials will be searched. 

### Register and Show
If your name and your social match a record in the database, then you will be shown a view with your information and the option to edit your information below. 

If the social matches but NOT the name, you will recieve an error. This is intended to prevent duplicate entries in the database. If the name matches but NOT the social, you will be considered a new user since names are less unique )how many John Smiths are there?). If neither match, you also be considered a new user, and directed to the registration view. 

The registration view contains the name and social you've already entered plus two new fields (address and phone number with validations) to complete your registration. Once information is entered and saved, you are registered and your information will be displayed with an option to edit.

### Edit
Upon clicking the edit option, your information will change to show inside a form that you may update. Validations are in place to ensure the information is as accurate as possible. After you've updated your information and clicked "Update", you will be shown a view containing your information with the option to edit further if you need.

### Start Over
If at any point you desire to begin anew, simple click "Start Over" to be brought back to the search view.

## Afterthoughts & Improvements
---
1. I'd like to modify my schema:
   - to separate the full name into first and last name. 
   - to separate street address, city, state, and zipcode.

This modification would allow for better search capabilities and would keep our database cleaner, I think.

2. Adding CSS is always a plus.


