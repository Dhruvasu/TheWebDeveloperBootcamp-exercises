var lis = document.querySelectorAll("li");
var lineThrough = false;

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.style.color = "blue";
	});
	lis[i].addEventListener("mouseout", function() {
		this.style.color = "black";
	});

	lis[i].addEventListener("click", function() {
		if (lineThrough == false) {
			this.style.textDecoration = "line-through";
			lineThrough = true;
		}
		else {
			this.style.textDecoration = "none";
			lineThrough = false;
		}
	});
}