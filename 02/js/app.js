class App {
	static init() {
		$('#calc-button').on('click', e => {
			const val1 = parseInt($('#text1').val());
			const val2 = parseInt($('#text2').val());
			$('#answer').text((val1 + val2) + '');
		});
	}
}