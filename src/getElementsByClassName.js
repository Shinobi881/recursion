// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // Create an array to store the nodes identified by the className
  var nodeList = [];
  var containsClassName = RegExp('(^|\\s)'+className+'(\\s|$)');
  // Recursive function
  function recurse(node) {
  	
  	if (containsClassName.test(node.className)) {
  		nodeList.push(node);
  	}

  	_.each(node.children, function(child){
  		// Recurse
  		recurse(child);
  		//debugger;
  	});
  	
  	
	}
  // Recurse

  recurse(document.body);
  console.log('My Array', nodeList);
  return nodeList;


};
