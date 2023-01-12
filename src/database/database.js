// import mysql from "promise-mysql";
import config from "./../config";

const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

export const getConnection = () => {
    return connection;
};