import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_Port),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [`${__dirname}/**/model/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
});

// subscribers: [],
// logging: true,
