const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

const todoListItems = [
  { todo: "Milk", isChecked: false },
  { todo: "Eggs", isChecked: false },
  { todo: "Bread", isChecked: false },
  { todo: "Veggies", isChecked: false },
];

todoForm.onsubmit = function (event) {
  event.preventDefault();

  const data = new FormData(todoForm);
  let item = {
    todo: data.get("todo"),
    isChecked: false,
  };
  todoListItems.push(item);
  todoList.innerHTML = "";
  initTodo();

  todoForm.reset();
};

function initTodo() {
  for (let i = 0; i < todoListItems.length; i++) {
    let newLi = document.createElement("li");

    newLi.innerHTML = 
    `<div class="todo-list-item">
    <input type="checkbox" name="milk" ${todoListItems[i].isChecked ? "checked" : ""} id="todo_${todoListItems[i].todo}"  /> 
                      <span>${todoListItems[i].todo}</span></div>`;
    todoList.appendChild(newLi);

    document
      .getElementById(`todo_${todoListItems[i].todo}`)
      .addEventListener("click", function (e) {
        let selectedItem = document.getElementById(e.target.id);
        if (selectedItem.checked) {
          selectedItem.nextElementSibling.classList.add("strike-off");
        } else {
          selectedItem.nextElementSibling.classList.remove("strike-off");
        }
      });
  }
}

initTodo();
