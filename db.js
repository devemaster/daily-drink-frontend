const { Client } = require('pg');

const client = new Client({
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: 'redis',
	ssl: true
})


client
	.connect()
	.then(() => console.log('connected to DB'))
	.catch(err => console.error('connection error', err.stack))

module.exports = client;