const input = document.getElementById("input");
const list = document.querySelector(".list");
function add() {
 if(input.value === ""){
    alert('Please enter a task !')
    return;
 }
 div = document.createElement("Div"); // create div 
  div.className = "details"  // div ki class
  ptag = document.createElement("p"); // create p tage
  deletebtn = document.createElement('Button'); // create button
  deletebtn.className = "deltbtn"
  deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>` // button ka name
  list.append(div);  // list ke ander div 
  div.append(ptag , deletebtn);  // sbhi div ke ander ptage orr delete btn
   ptag.innerText = input.value ;   // input value p tage me show 


   deletebtn.addEventListener('click',()=>{
    div.remove();
    alert('delete your details');
})
}
 
