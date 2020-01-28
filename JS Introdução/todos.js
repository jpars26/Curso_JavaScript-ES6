var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rederTodos(){
    // remover todo conteudo do listElement
    listElement.innerHTML = '';
    // um for especifico para array, percorre todos os itens e guarda na variavel
    for(todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        // retorna a posição do array
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        
        listElement.appendChild(todoElement)
        
    }

}

rederTodos();

function addTodo() {
    var todoText = inputElement.value

    todos.push(todoText)
    //apaga o que ta escrito no texto do box
    inputElement.value = '';
    rederTodos();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
// remove uma quantidade de itens do array baseado na posição que a gente passar
    todos.splice(pos, 1);
    rederTodos();
    saveToStorage()
}

function saveToStorage( ){


    localStorage.setItem('list_todos', JSON.stringify(todos));
}