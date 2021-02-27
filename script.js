var items = document.getElementById('list');
var lists = []

function addList(){
    
	var list = document.getElementById('list');
	var val = list.value;
	if(val == ""){
		alert("Tiene que ingresar los datos de su lista");
	}else{
		lists.push(val.trim());
		list.value = '';
		displayList();
	}
	
}

function displayList(e){
    
	var data = '';
	if(lists.length > 0){
		for(var i=0; i < lists.length; i++){
			data += "<li class='contenedor-tareas-nuevaTarea'>"+lists[i]+"<button class='contenedor-tareas-trash' onclick='removeList("+i+")'><span></span>Remover</button></li>";
		}
	}
	
	document.getElementById('result').innerHTML = data;
}

function removeList(list){
	lists.splice(list, 1);
	displayList();
}
	