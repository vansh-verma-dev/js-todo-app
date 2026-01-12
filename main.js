const input = document.getElementById("input");
const list = document.querySelector(".list");

// Page load hone par localStorage se tasks load karna
window.onload = function() {
    let todo = JSON.parse(localStorage.getItem('item')) || [];
    todo.forEach(task => {
        createTask(task);
    });
}

function add() {
    const display = input.value.trim();
    if(display === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(display);

    // localStorage me save karna
    let todo = JSON.parse(localStorage.getItem('item')) || [];
    todo.push(display);
    localStorage.setItem('item', JSON.stringify(todo));

    input.value = "";
}

 
function createTask(display) {
    const div = document.createElement("div");
    div.className = "details";

    const ptag = document.createElement("p");
    ptag.innerText = display;

    const deletebtn = document.createElement("button");
    deletebtn.className = "deltbtn";
    deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    div.append(ptag, deletebtn);
    list.append(div);

   
    deletebtn.addEventListener("click", () => {
    const confirmDelete = confirm("delete ?");

    if(confirmDelete) {    
        div.remove();     
        removeFromLocalStorage(display);  
    } else {
         
    }
});
}

// localStorage se delete karne ka function
function removeFromLocalStorage(task) {
    let todo = JSON.parse(localStorage.getItem('item')) || [];
    todo = todo.filter(item => item !== task);
    localStorage.setItem('item', JSON.stringify(todo));
}
