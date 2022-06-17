# Blog Post

![HTML](https://img.shields.io/badge/-NODE-orange) ![JS](https://img.shields.io/badge/-JS-yellow) ![Node](https://img.shields.io/badge/-MySQL2-darkgreen)
![JEST](https://img.shields.io/badge/-SQL-darkred) ![Sequelize](https://img.shields.io/badge/-Sequelize-blue) ![Dotenv](https://img.shields.io/badge/-Dotenv-purple) ![Express](https://img.shields.io/badge/Express-indigo) ![Bcrypt](https://img.shields.io/badge/Bcrypt-white)

![Express-session](https://img.shields.io/badge/Express-session-brown) ![Express-handlebars](https://img.shields.io/badge/Express-handlebars-red) 

![Github licence](https://img.shields.io/badge/license-MIT-blue)

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Heroku Deployment

https://homework-blogpost.herokuapp.com/

## Table-of-Contents
* [Installation](#installation)
* [Usage](#usage)
* [URL (github repository)](#urlrepo)
* [Technologies](#technologies)
* [Screenshot](#screenshot)
* [License](#license)
* [Questions](#questions)


## Installation  

To install type

    npm install

This will install all the dependency modules.

To create database login to mysql and run schema.sql as follow, you will have to change the credentials in the .env file according to your database;
    
    SOURCE schema.sql

## Usage      
    npm start

To start the project, type the above command and server will start running.

## URL (github repository)<a name="urlrepo"></a>

Following link is to access the code files using github repository.

https://github.com/muradmanni/homework-tech-blog

## Technologies
* JS
* Node.js
* MongoDB
* Handlebars
* Model-View-Controller
* dotenv
* MySQL
* nodemailer
* Cookies
* Sessions

## Screenshot
### HomePage Screen
Homepage screen shows all the POST, you cant click and get the comments unless you login. Once a user is logged in then only the comments page will be displayed after clicking on a POST and hence can enter comments to that post.
![homepage image](/public/images/mainpage.jpg)

### Dashboard Screen
Dashboard screen is only accessible when a user is logged in and it will only display those POST of that particular user, so the user can edit or delete an existing POST of add a new POST.
![homepage image](/public/images/dashboard.jpg)

## [License](#table-of-contents)
The application is covered under the following license: [MIT](https://choosealicense.com/licenses/mit/)

## [Questions](#table-of-contents)
Feel free to email at murad.manni@gmail.com, if you have any further questions relating to this project.

Checkout more on [Github](https://github.com/muradmanni)
---
© 2022 Murad Ali. All Rights Reserved.
