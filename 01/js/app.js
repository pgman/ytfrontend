class App {
	static init() {
		const calc = document.getElementById('calc-button');
		calc.addEventListener('click', e => {
			const text1 = document.getElementById('text1');
			const val1 = parseInt(text1.value);
			const text2 = document.getElementById('text2');
			const val2 = parseInt(text2.value);
			const answer = document.getElementById('answer');
			answer.innerText = (val1 + val2) + '';
		});
	}
}