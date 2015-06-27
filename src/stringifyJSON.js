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


	//var isEmptyObject = obj ? [] | {};

	//console.log(isEmptyObject);

	var result;

	// Object testing
	if (obj.constructor === Array) {
		if (obj.length === 0) {
			return '[]';
		} else {
			result = '['
			_.each(obj, function(element){result += stringifyJSON(element) + ','});
			console.log('Result for array', result); 

			if(result[result.length-1] === ","){
				result = result.slice(0, -1);}
				return result += ']';
			}
	}
// -----------------------------------------------

	if(obj.constructor === Object){
		// if(obj === {}){
		// 	return '{}'
			result = '{';
			
			_.each(obj, function(value, key){ 

				if(typeof value === 'function' || typeof value === 'undefined'){
									return "{}";
								}				
					  			result += "\"" + key + "\":" + stringifyJSON(value, true);
					  			result += ",";

			});
			console.log('Result for array', result);

			if(result[result.length-1] === ","){
	   			result = result.slice(0, -1);}
		
		return result += '}';
		}	
	
	

};






	