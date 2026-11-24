let $ = document
let add_item_btn = $.querySelector(".add_item")
let delet_btn = $.querySelector(".cancel")
let add_todo_layer = $.querySelector(".add-todo_layer")
let submit_todo = $.querySelector(".submit")
let user_input = $.querySelector(".user_input")
let count_of_tasks = 1
let no_status = $.getElementById("no_status")
let not_started = $.getElementById("not_started")
let in_progress = $.getElementById("in_progress")
let completed = $.getElementById("completed")
let body = $.querySelector("body")

function add_todo_func(){
    add_todo_layer.style.display = "none"
    let new_item_div = $.createElement("div")
    new_item_div.setAttribute("class","item")
    new_item_div.setAttribute("id", count_of_tasks +1)
    new_item_div.setAttribute("draggable", "true")
    let new_cancel_btn = $.createElement("span")
    new_cancel_btn.setAttribute("class", "cancel")
    new_cancel_btn.innerHTML = "X"
    new_cancel_btn.addEventListener("click", function(){
        new_item_div.remove()
    })
    new_item_div.addEventListener("dragstart", function(event){
        event.dataTransfer.setData("dragvalue", new_item_div.id)
    })

    let new_item = $.createElement("span")
    new_item.setAttribute("class", "todo-item")
    new_item.innerHTML = user_input.value
    new_item_div.append(new_item)
    new_item_div.append(new_cancel_btn)
    no_status.append(new_item_div)
    user_input.value = ""
    count_of_tasks++
}

add_item_btn.addEventListener("click", function(){
    add_todo_layer.style.display = "block"
})

submit_todo.addEventListener("click", function(){
    if (user_input.value){
        add_todo_func()
    } else {
        alert("ورودی خالی است!")
    }
})

user_input.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        if (user_input.value){
            add_todo_func()
        } else {
            alert("ورودی خالی است!")
        }
    }
})

no_status.addEventListener("dragover", function(event){
    no_status.classList.add("hover-class")
    event.preventDefault()
})
not_started.addEventListener("dragover", function(event){
    not_started.classList.add("hover-class")
    event.preventDefault()
})
in_progress.addEventListener("dragover", function(event){
    in_progress.classList.add("hover-class")
    event.preventDefault()
})
completed.addEventListener("dragover", function(event){
    completed.classList.add("hover-class")
    event.preventDefault()
})
no_status.addEventListener("drop", function(event){
    no_status.append($.getElementById(event.dataTransfer.getData("dragvalue")))
})
not_started.addEventListener("drop", function(event){
    not_started.append($.getElementById(event.dataTransfer.getData("dragvalue")))
})
in_progress.addEventListener("drop", function(event){
    in_progress.append($.getElementById(event.dataTransfer.getData("dragvalue")))
})
completed.addEventListener("drop", function(event){
    completed.append($.getElementById(event.dataTransfer.getData("dragvalue")))
})

body.addEventListener("keydown", function(event){
    if(event.target.id == "arman"){
        if(event.code == "KeyN"){
            add_todo_layer.style.display = "block"
        }
    }
})

not_started.addEventListener("dragleave", function(){
    not_started.classList.remove("hover-class")
})
not_started.addEventListener("dragend", function(){
    not_started.classList.remove("hover-class")
})

no_status.addEventListener("dragleave", function(){
    no_status.classList.remove("hover-class")
})
no_status.addEventListener("dragend", function(){
    no_status.classList.remove("hover-class")
})

in_progress.addEventListener("dragleave", function(){
    in_progress.classList.remove("hover-class")
})
in_progress.addEventListener("dragend", function(){
    in_progress.classList.remove("hover-class")
})

completed.addEventListener("dragleave", function(){
    completed.classList.remove("hover-class")
})
completed.addEventListener("dragend", function(){
    completed.classList.remove("hover-class")
})