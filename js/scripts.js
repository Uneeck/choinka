function rysujChoinkę(a) {
	for (var i = 1; i <= a; i++) {
		var star = '';
		for (var k = a; k > i; k--) {
			star += ' '; 
		}
		for (var j = 0; j < i*2-1; j++) {
			star += '*';	
		}
		console.log(star);
	}
}

rysujChoinkę(5);