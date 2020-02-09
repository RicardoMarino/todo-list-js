var listElement = document.querySelector('#app ul')
var inputElemet = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function retornarTodos(){
    listElement.innerHTML = '';
    saveToStorage();
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var index = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deleteTodo(${index})`);
        
        linkElement.appendChild(linkText)
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    var todoText = inputElemet.value;
    todos.push(todoText)
    inputElemet.value = '';
    retornarTodos();
}

function deleteTodo(index){
    todos.splice(index, 1);
    retornarTodos();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

retornarTodos();