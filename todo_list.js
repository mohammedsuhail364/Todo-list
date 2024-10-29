let input=document.getElementById('input')
let button=document.getElementById('button')
let show=document.getElementById('show')
let todos=[]
window.onload=()=>
{
    todos=JSON.parse(localStorage.getItem('todos'))||[]
    todos.forEach(todo => {
        addtodo(todo)
    });
}
button.addEventListener('click',()=>
{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
    addtodo(input.value)
    input.value=""
})
function addtodo(todo){
    let para = document.createElement('p')
    para.innerText=todo
    
    show.appendChild(para)
    
    para.addEventListener('click',()=>
    {
        para.style.textDecoration="line-through"
        remove(todo)
    })
    para.addEventListener('dblclick',()=>
    {
        
        show.removeChild(para)
        remove(todo)
    })
    function remove(todo)
    {
        let index=todos.indexOf(todo)
        if (index>-1)
        {
            
            todos.splice(index,1)
        }
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}