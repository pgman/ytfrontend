class App {
	static init() {
		$('ul li').each((i, e) => {
			if(i % 2 === 0) {
				$(e).css({ backgroundColor: '#888' });
			}
		});
	}
}