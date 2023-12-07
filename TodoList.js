const form =  document.getElementById('form')
const input =  document.getElementById('input')
const todosUL =document.getElementById('todos')
// check localstorage: 
// it is stored in string: so we have to parse it to array
// console.log(todos)
const todos =JSON.parse(localStorage.getItem('todos'))
// console.log('todos',todos)

if(todos){
    todos.forEach( todo =>  addTodo(todo) )
}

//form id is entire form
//input id is which is taken data in the input tag
//todos is the collection of the tudos
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log("calling function addTodo()") //executed
    addTodo()
})


function addTodo(todo){
    console.log("Inside function addTodo()") //executed
    let todoText = input.value
    console.log('todo =',todo)////not executed
    console.log('todoText is input.value= '+todoText)//todoText is input.value= Hello

    if(todo){
        console.log('insode if(todo) ')
        todoText= todo.text
        console.log('todoText'+todoText)
    }

    console.log('outside if(todo) ') //executed
    console.log('todoText = '+todoText) //todoText = Hello

    if(todoText){
        console.log('inside if(todoText) ')  //executed
        const todoEl= document.createElement('li')
        console.log('todoEl'+todoEl)//executed
        console.log('todo',todo)// todo undefined 

        // console.log('todo.completed',todo.completed)
        if(todo && todo.completed){
            todoEl.classList.add('completed');
            console.log('todo',todo)//not executed
            console.log('todo.completed',todo.completed) //not executed
        }

        console.log('todoText is input.value= '+todoText) //todoText is input.value= Hello
        todoEl.innerText= todoText
        console.log('todoEl.innerText = ',todoEl.innerText) //todoEl.innerText =  Hello

        todoEl.addEventListener('click',()=> {
            todoEl.classList.toggle('completed') 
            updateLS()
        })

        // The on contextmenu event occurs when the user right-clicks on an HTML element to open the context menu
        todoEl.addEventListener('contextmenu',(e) => {
            e.preventDefault()// This will prevent all the default option in the browser while right click
            todoEl.remove() //click on right click the element will be deleted
            updateLS()
        })
        
        console.log('todosUL.appendChild(todoEl)')
        todosUL.appendChild(todoEl)
        console.log('todosUL.appendChild(todoEl)',todosUL.appendChild(todoEl)) //todosUL.appendChild(todoEl) <li>​Hello​</li>​

        input.value=''

        // after localstorage
        updateLS()
    }
}

function updateLS(){
    todoEl= document.querySelectorAll('li')

    const todos= []

    todoEl.forEach(todoEl=>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    //converting from an array to   using JSON.stringify
    localStorage.setItem('todos',JSON.stringify(todos))
}

// key:name, value:Akshata
// localStorage.setItem('name','Sushma')
// JSON.parse(localStorage.getItem(obj))
// JSON.str
//stringify
// parse