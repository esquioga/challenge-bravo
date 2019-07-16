API Conversor de moedas

- Propósito:
	API para conversão de valores nas moedas USD, BRL, EUR, BTC e ETH.

- Requisitos funcionais:

	- A API deve receber chamadas de conversão contendo uma moeda inicial, a moeda alvo e o valor. Quando a chamada for recebida será feita a conversão do valor, e será devolvido um JSON com as informações para o requerente.

	- Os valores de conversão devem ser guardados e atualizados regularmente.

- Requisitos não funcionais:

	- A API deve suportar a carga de 1000 requerimentos por 100ms.


- Stack:

	- Nodejs
	- SQLite
	- Open exchange rates API