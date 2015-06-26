// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // Create an array to store the nodes identified by the className
  var nodeList = [];

  // Recursive function
  function recurse(node) {
  	
  	if (node.className === className) {
  		nodeList.push(node);
  	}

  	_.each(node.children, function(child){
  		recurse(child);
  		//debugger;
  	});
  	
  	// Run through the document.body
  	// Look for the node specified by the className specified
  	// Store that node into the array
	}
  // Recurse

  recurse(document.body);
  console.log('My Array', nodeList);
  return nodeList;


};
