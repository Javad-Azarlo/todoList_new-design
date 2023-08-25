let txt_frm = document.querySelector("input");
let btn_submit = document.querySelector("button");
let tasks = document.querySelector(".tasks");

document.addEventListener("DOMContentLoaded" , domContentLoad)

btn_submit.addEventListener("click" ,funcBtnAddTodo)

function funcBtnAddTodo(e){
    e.preventDefault();
    console.log(txt_frm.value);

    let crt_div = document.createElement("div");
    crt_div.classList.add("task");

    let crt_check = document.createElement("input");
    crt_check.setAttribute("type" , "checkbox");
    crt_check.setAttribute("class" , "CheckBox");
    let crt_lbl = document.createElement("label");
    crt_lbl.innerText= txt_frm.value;
    crt_div.appendChild(crt_check);
    crt_div.appendChild(crt_lbl)

    let crt_btn_del = document.createElement("button");
    crt_btn_del.innerText = "Delete"
    crt_btn_del.classList.add("delete");
    crt_div.appendChild(crt_btn_del);

    tasks.appendChild(crt_div);
    local_stroge(txt_frm.value)
    txt_frm.value = "";
}

tasks.addEventListener("click" , tasksFunction)
function tasksFunction(e){
    console.log("tasks : " + " " + e.target)
    let item = e.target;
    if(item.classList[0] === "delete"){
        let item_parent = item.parentElement;
        item_parent.remove();
        delitemLocal(item_parent);
    }
    if(item.classList[0] === "CheckBox"){
        let parent_todo = item.parentElement;
        parent_todo.classList.toggle("completed")
    }
}
function local_stroge(inpt){
    let todos ;
    if(localStorage.getItem("todos_local") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos_local"));
    }
    todos.push(inpt);
    localStorage.setItem("todos_local" , JSON.stringify(todos))
}

function delitemLocal(r){
let todos ;
if(localStorage.getItem("todos_local") === null){
    todos = [];
}
else{
    todos = JSON.parse(localStorage.getItem("todos_local"));
}
let child = r.childNodes[1].innerText;
  todos.splice(todos.indexOf(child) , 1)
 localStorage.setItem("todos_local" , JSON.stringify(todos))
}
function domContentLoad(){
    let todos ;
    if(localStorage.getItem("todos_local") === null){
    todos = [];
    }
    else{
    todos = JSON.parse(localStorage.getItem("todos_local"));
    }
    todos.forEach(item => {
        //
        let crt_div = document.createElement("div");
        crt_div.classList.add("task");

        let crt_check = document.createElement("input");
        crt_check.setAttribute("type" , "checkbox");
        crt_check.setAttribute("class" , "CheckBox");
        let crt_lbl = document.createElement("label");
        crt_lbl.innerText= item;
        crt_div.appendChild(crt_check);
        crt_div.appendChild(crt_lbl)
        let crt_btn_del = document.createElement("button");
        crt_btn_del.innerText = "Delete"
        crt_btn_del.classList.add("delete");
        crt_div.appendChild(crt_btn_del);
        tasks.appendChild(crt_div);
        //
    })
}