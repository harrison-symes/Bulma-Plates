# A starter webpack project for React, Redux, Express and Knex

This is a rad base for starting a new full-stack project, or just as reference for how to do things the Harrison way.

* Fork this repo to your github
* Rename your repo according to the app you're building
* Clone your forked repo down
* Run the following commands in your terminal

```sh
npm install
knex migrate:latest
knex seed:run

```

  `npm run dev` or `yarn dev` for bundling, watch and nodemon

  `npm start` or `yarn start` only runs server (setup for heroku)


# Heroku!!!

#### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


#### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`yarn h:deploy` will push your local master branch to your heroku app

`yarn h:migrate` will run your knex migrations on your deployed heroku app

`yarn h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`


## Ta-Da!
Your app should be deployed!
