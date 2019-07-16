import sqlite3 from 'sqlite3';


class AppDAO {

	constructor(dbFilePath) {
		this.db = new sqlite3.Database(dbFilePath, (err) => {
			if(err) {
				console.log('Error connecting to DB: ', err);
			} else {
				console.log('Connected to DB.');
				this.createTable();
			} 
		});
	}

	createTable() {
		const sql = `
			CREATE TABLE IF NOT EXISTS currency(
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL UNIQUE,
				rate REAL NOT NULL
			)`;
		return this.db.run(sql);
	}

	getData(callback) {
		const sql = `
			SELECT * FROM currency	
		`
		this.db.all(sql, callback);
	}

	insertValue(name, value) {
		const sql = `
			INSERT INTO currency
			(name, rate)
			VALUES(?, ?)
		`
		this.db.run(sql, [name, value], (err) => {
			if(err) console.log('Error inserting obj: ', err);
		})
	}

}

export default AppDAO;