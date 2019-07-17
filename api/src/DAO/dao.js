import sqlite3 from 'sqlite3';
import {getNewRates} from '../util/rateUpdater.js';


class AppDAO {

	constructor(dbFilePath) {
		this.db = new sqlite3.Database(dbFilePath, (err) => {
			if(err) {
				console.log('Error connecting to DB: ', err);
			} else {
				console.log('Connected to DB.');
				this.initialSetup();
			} 
		});
	}

	initialSetup() {
		this.db.get(`
				SELECT name FROM sqlite_master 
				WHERE type='table' AND name='currency' 
			`, (err, row) => {
				if(!row) this.createTable();
				this.updateRates();
		});

	}

	createTable() {
		const sql = `
			CREATE TABLE currency(
				id TEXT PRIMARY KEY UNIQUE,
				rate REAL NOT NULL
			)`;
		return this.db.run(sql);
	}

	updateRates() {
		getNewRates((err, data) => {
			if(err) {
				console.log('Error updating rates: ', err);
			} else {
				for(var coinId in data.rates){
					this.insertValue(coinId, data.rates[coinId]);
				}

				this.insertValue('ETH', 0.00499069); //API NÃO APRESENTA VALOR DE ETHER 
			}
		});
		
	}

	getData(callback) {
		const sql = `
			SELECT * FROM currency	
		`
		this.db.all(sql, callback);
	}

	insertValue(id, rate) {
		const sql = `
			INSERT INTO currency
			(id, rate)
			VALUES(?, ?)
			ON CONFLICT(id) DO
			UPDATE SET rate=excluded.rate
		`
		this.db.run(sql, [id, rate], (err) => {
			if(err) console.log('Error inserting obj: ', err);
		})
	}

}

export default AppDAO;