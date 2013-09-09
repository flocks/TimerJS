timer = require('./timerJS');




var testAsync = function(id, callback) {
	setTimeout(function() {
		callback("test");
	}, 1000);
}

testAsync(1, timer(function(r) {
	console.log(r);
}, 10));