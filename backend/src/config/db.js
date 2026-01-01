const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "TIMA@web25",
  database: process.env.DB_NAME || "lebaneats_db",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

module.exports = pool.promise();
