todo();

function todo() {
	var response = prompt("What do you want to do?");
	var todoList = [];
	while (response != "quit") {
		if (response === "new") {
			var item = prompt("Enter an item to add");
			todoList.push(item);
		}
		else if (response === "list") {
			console.log(todoList);
		}
		response = prompt("What do you want to do?");
	}
}