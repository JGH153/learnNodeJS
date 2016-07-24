
var funcArray = [];

funcArray.push(function(index){
	console.log("HEi" + index);
});

funcArray.push(function(index){
	console.log("Halla" + index);
});

funcArray.push(function(){
	console.log("Så kult");
});

funcArray.push(function(index){
	console.log("Mohahah" + index);
});

funcArray.forEach(function(item, index){
	item(index);
});

// for(let i = 0; i < funcArray.length; i ++){
// 	funcArray[i]();
// }
