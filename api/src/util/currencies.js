import Currency from './currency.js';


class Currencies {
	
	constructor(dao) {
		this.chached = [];
		dao.getData((err, rows) => {

			if(err) {
				console.log('Error getting data.\n', err);
			} else {
				for(let i in rows) {
					console.log(rows[i]);
					this.chached.push(new Currency(rows[i].id, rows[i].rate));
				}
				console.log(this.chached);
			}
		});
	}

	convertValue(from, to, amount) {
		let fromRate = this.chached.find((item) => {
			return item.id == from;
		}).value;

		let toRate = this.chached.find((item) => {
			return item.id == to;
		}).value;

		console.log(fromRate, toRate);

		return (amount / fromRate) * toRate;
	}

	
}

export default Currencies;