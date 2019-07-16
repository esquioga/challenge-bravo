import express from 'express';
import AppDAO from './src/DAO/dao.js';
import Currencies from './src/obj/currencies.js';
import request from 'request';

const app = express();

const dao = new AppDAO('./db/test.sqlite');

const cur = new Currencies(dao);

app.get('/', (req, res) => {
	res.send("Hello Babel");
});

app.listen(5000, () => console.log('Inicio!'));