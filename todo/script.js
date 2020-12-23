const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const liEgg = document.getElementById("liEgg");

todoForm.onsubmit = function (event) {
  event.preventDefault();

  const data = new FormData(todoForm);
  const newLi = document.createElement("li");
  newLi.innerHTML =
    ` <input type="checkbox" name="${data.get("todo")} " /> ${data.get("todo")}`;

  todoList.appendChild(newLi);
};

liEgg.onclick = function(){
    liEgg.nextElementSibling.style.textDecoration = "line-through"
    // console.log();
}