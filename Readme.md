# Setting up Sequelize Database

  npm install --save sequelize

  So we have lot of sequel db's, so install appropriate driver for your db, i am using mysql so i am installing mysql driver through following command

  npm install --save mysql2

  install sequelize-cli
  
  npm i sequelize-cli

  Navigate to Src folder and initialize sequelize-cli

  npx sequelize init

  This command create config.json, models, migrations folders and files.

  create DB

  npx sequelize db:create

  create Table

  npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer

  npx sequelize migration:generate --name update-city-airport-association

  npx sequelize db:migrate:undo