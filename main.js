let items = document.getElementById("list");

function add(){
	let content = window.prompt("What do you need to do?");
	content = "<button onclick='del()'>X</button>" + content;
	let c = document.createElement('div');
	c.innerHTML = content;
	items.appendChild(c);
}

function del(){
	items.removeChild()
}