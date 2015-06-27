// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// Unstringifiables 
	if (typeof obj == 'function') {
		return '';
	}

	if (typeof obj == 'undefined') { 
		return'';
	}
	
	// Stringifiables' conditionals
	if (obj === null || typeof obj === 'number' || typeof obj === 'boolean')
	return '' + obj + '';

	if (typeof obj === 'string') 
		return '"'+obj+'"';
}
};
