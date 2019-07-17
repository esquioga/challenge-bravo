import https from 'https';

const url = 'https://openexchangerates.org/api/latest.json?app_id=ed3e6c24649f486ab7ed29b30710e6b3&base=USD&symbols=BRL,EUR,BTC,USD';

function getNewRates(callback) {

	https.get(url, (res) => {
		
		res.on('data', (data) => {
			const msg = JSON.parse(data.toString());
			callback(msg.message, msg);
		});

		res.on('error', (err) => {
			callback(err);
		});
	})
}

export {getNewRates}