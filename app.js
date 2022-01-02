/**
 * @param {*} probes
 */

 function macsByRadio(probes) {
	/**Iniciando variaveis com estado vazio */
	let radios = [];
	const result = [];

	/** Certificando que é diferente do array de probes e certificando que realmente não é de um tipo Array */
	if (!Array.isArray(probes) && !probes) {
		return result;
	}

	/**Peccorendo o array de probes para pegar os casos de teste */
	probes.map((probe) => {
		/**Função vazia para atribuir chamada mais a frente */
		let countRadios = () => {};

		/**Identificando os radios e atribuindo valores a constante {result}  */
		if (!radios.includes(probe.radio)) {
			radios.push(probe.radio);
			result.push({ radio: probe.radio, macs: [] });
			/**Chamada da função vazia  */
			countRadios();
		}
		/**Atribuindo a chamada da função e seus valores */
		countRadios = result.map((radio) => {
			if (radio.radio === probe.radio) {
				radio.macs.push(probe.mac);
			}
		});
	});

	return result;
}

module.exports = { macsByRadio };
