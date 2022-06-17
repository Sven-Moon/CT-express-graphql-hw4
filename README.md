# This Homework
Add authentication to your app. You should be able to login, register, and logout.
Setup the authentication middleware as well as userData middleware to pull in the user’s posts and other information from GraphQL


# HW3:
Move your routes and templates to use the application structure we used in class. A routes folder separated out into “blueprints”. You should also have dedicated folders for your template views and partials
Add POST routes and mutations to your applications. You should add functionality to create users and add posts to your database


# Last Homework
* Setup your GraphQL route in the main express application for testing
* Setup your mongoose models and GraphQL types, you can add whatever models/types you think you will need, but you must add at least a post and a user. You can add whatever fields you think make sense to each.
* Setup your GraphQL queries, you can add whatever queries you think you will need, but you must add at least a user query (by user id), a post query (by post id), and a query to get all of your posts

-----
During this week, we’ll be progressing through a Twitter clone application. You’ll be adding onto it each night for homework as we discuss different topics in class.

The Finished Product

You can view a “finished” example version of the application here:

https://codingtemple-tweeta.herokuapp.com/

By the end of the project your application will have the following pages:
This page contains a form to add new posts as well as a list of all of the posts that have been made in date-descending order.
This will be a dynamic route that includes a user id. Using this user ID you will dynamically fill in the page template with the user’s username and posts.
This will be a dynamic route that displays the currently logged in user’s username and posts.
These will each be a page with either a login or register form for authentication.

Today we’ll be setting up the framework for your application. We’ll focus on creating a couple of routes that we can build off of in the coming days.

Build out the following routes, each route can be very basic and just render its corresponding template from the next step:
Home
Profile
Login
Register
User


You’ll also need to build out the following EJS templates/template parts:
Pages - For these you can just include the header and footer template parts, and leave an h1 on the page with the page’s name
Header - This should be a functional header including a bootstrap navbar, with functional routing between the routes we have set up
Footer