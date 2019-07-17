import express from 'express';
import AppDAO from './src/DAO/dao.js';
import Currencies from './src/util/currencies.js';
import https from 'https';

const app = express();

const dao = new AppDAO('./db/test.sqlite');

const cur = new Currencies(dao);



app.get('/', (req, res) => {
 	res.send("Hello Babel");
});

app.get('/converter', (req,res) => {
	const from = req.query.from;
	const to = req.query.to;
	const amount = parseFloat(req.query.amount);
	var value = cur.convertValue(from, to, amount);
	res.json({ 'value': value });
});

 app.listen(5000, () => console.log('Inicio!'));