function reverse(arr) {
	var i = arr.length - 1;
	while (i >= 0) {
		console.log(arr[i]);
		i--;
	}
}

function isUniform(arr) {
	var i = arr[0];
	for (var j = 1; j < arr.length; j++) {
		if (i != arr[j]) {
			return false;
		}
	}
	return true;
}

function sum(arr) {
	var result = 0;
	arr.forEach(function(el) {
		result += el;
	});
	return result;
}

function max(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}