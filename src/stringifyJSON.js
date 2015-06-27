// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// Unstringifiables 
	if (typeof obj === 'function' || typeof obj === 'undefined') {
		return '';
	}
	
	// Stringifiables' conditionals
	if(obj === null){
		return obj + '';
	} 

	if (typeof obj === 'number' || typeof obj === 'boolean')
	return obj.toString();

	if (typeof obj === 'string') 
		return '"' + obj + '"';


	var isEmptyObject = obj ? [] : {};

	console.log(isEmptyObject);

	var result;

	// Object testing
	if (obj.constructor === Array) {
	  		if (isEmptyObject === []) {
	  			return 'obj';
	  		} else {
	  			result = '['
	  			_.each(obj, function(element){result += stringifyJSON(element) + ','});
	  		console.log('Result for array', result); 
	  		return result += ']';
	  		}
	  	}
// -----------------------------------------------

	if(obj.constructor === Object){
		if(obj === {}){
			return 'obj'
		} else {
			result = '{';
			_.each(obj, function(value, key){ result += '\'' + key + '\':' + stringifyJSON(value) + ','});
			console.log('Result for array', result);
		return result += '}';
		}	
	}
	

};

	