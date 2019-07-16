import sqlite3 from 'sqlite3';


class AppDAO {

	constructor(dbFilePath) {
		this.db = new sqlite3.Database(dbFilePath, (err) => {
			if(err) {
				console.log('Error connecting to DB: ', err);
			} else {
				console.log('Connected to DB.');
				console.log(this.createTable());
				console.log(this.getData());
			} 
		});
	}

	createTable() {
		const sql = `
			CREATE TABLE IF NOT EXISTS currency(
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				rate REAL NOT NULL
			)`;
		return this.db.run(sql);
	}

	getData() {
		const sql = `
			SELECT * FROM currency	
		`
		return this.db.all(sql);
	}

}

export default AppDAO;