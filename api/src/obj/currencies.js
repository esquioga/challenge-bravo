import Currency from './currency.js';

const eth = new Currency('ETH', 0.00499069)

class Currencies {
	
	constructor(dao) {
		this.chached = [];
		dao.getData((err, rows) => {

			if(err) {
				console.log('Error getting data.\n', err);
			} else {
				for(let i in rows) {
					console.log(rows[i]);
					this.chached.push(new Currency(rows[i].id, rows[i].name, rows[i].rate));
				}
				console.log(this.chached);
			}
		});
	}

	loadValues() {
		
	}
}

export default Currencies;