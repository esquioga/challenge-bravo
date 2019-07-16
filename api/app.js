import express from 'express';
import AppDAO from './src/dao.js';

const app = express();
const appDAO = new AppDAO('./db/test.sqlite');
console.log(appDAO);

app.get('/', (req, res) => {
	res.send("Hello Babel");
});

app.listen(5000, () => console.log('Inicio!'));