# Google Book Search
This full-stack web app is a simple CRUD app that allows the user to search the google books api and then save results to a database for future browsing.

[Github](https://github.com/bradotron/google-books-search)
[Heroku](https://vast-lowlands-31724.herokuapp.com/)

# Using the App
The home page of the app has a search field with a search button. Enter a book title to search for. When the results come back, the book can be saved to the database by clicking the save button.

To view the list of saved books, click the Saved link in on the navbar at the top of the page.

# App Organization
The app was created by first using express-generator to create the backend. Inside that folder, create-react-app was used to generate the front end. The database used for this app is Mongo, using the Mongoose ODM node package. 

## Folder Structure
```
|-- projectRoot
    |-- .gitignore
    |-- app.js
    |-- homework_instructions.md
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- bin
    |   |-- www
    |-- client
    |   |-- .gitignore
    |   |-- package.json
    |   |-- README.md
    |   |-- yarn.lock
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- manifest.json
    |   |-- src
    |       |-- App.js
    |       |-- App.test.js
    |       |-- index.css
    |       |-- index.js
    |       |-- logo.svg
    |       |-- serviceWorker.js
    |       |-- Components
    |       |   |-- Book
    |       |   |   |-- index.js
    |       |   |-- SearchForm
    |       |       |-- index.js
    |       |-- Pages
    |       |   |-- Home.js
    |       |   |-- NoMatch.js
    |       |   |-- Saved.js
    |       |   |-- Search.js
    |       |-- utils
    |           |-- googleBooksApi.js
    |           |-- myBooksApi.js
    |-- models
    |   |-- Book.js
    |   |-- index.js
    |-- routes
        |-- api.js
```