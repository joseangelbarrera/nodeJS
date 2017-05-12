var array = [1,4,5,6,7,8,9,7,4,32,2,2,23443,23]
var filtered = array.filter(item, {
	return item < 5;
})

console.log(filtered)