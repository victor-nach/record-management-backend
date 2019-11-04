# setup sequelize
npm i --save pg-hstore sequelize sequelize-cli 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all

npx sequelize-cli model:generate --name Record --attributes firstName:string,surname:string,dob:date,age:number,height:number