import knex from "knex";
import { DataSource } from "typeorm"
import { Equipments } from "./Equipments/entity/Equipments"
import * as dotenv from 'dotenv';
import { Exemplary } from "./Exemplary/entity/Exemplary";
dotenv.config();


const username_DB = process.env.username_db;
const password_DB = process.env.password_db;
const name_DB = process.env.name_db;

export const Appknex = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: username_DB,
      password: password_DB,
      database: name_DB,
    },
});
  


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: username_DB,
    password: password_DB,
    database: name_DB,
    synchronize: true,
    logging: false,
    entities: [Equipments, Exemplary],
    migrations: [],
    subscribers: [],
})
