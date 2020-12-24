const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

const todoListItems = [
  { id: 1, todo: "Milk", isChecked: false },
  { id: 2, todo: "Eggs", isChecked: false },
  { id: 3, todo: "Bread", isChecked: true },
  { id: 4, todo: "Veggies", isChecked: true },
];

todoForm.onsubmit = function (event) {
  event.preventDefault();

  const data = new FormData(todoForm);
  let item = {
    id: todoListItems.length + 1,
    todo: data.get("todo"),
    isChecked: false,
  };
  todoListItems.push(item);
  todoList.innerHTML = "";
  // debugger
  initTodo();

  todoForm.reset();
};

function initTodo() {
  for (let i = 0; i < todoListItems.length; i++) {
    let newLi = document.createElement("li");

    newLi.innerHTML = `<div class="todo-list-item">
    <input type="checkbox" name="milk" 
    ${todoListItems[i].isChecked ? "checked" : ""} 
    id="${todoListItems[i].id}"  
    /> 
    <span class="${todoListItems[i].isChecked ? "strike-off" : ""} ">
    ${todoListItems[i].todo}</span></div>`;
    todoList.appendChild(newLi);

    document
      .getElementById(`${todoListItems[i].id}`)
      .addEventListener("click", function (e) {
        let selectedItem = document.getElementById(e.target.id);

        if (selectedItem.checked) {
          let value = +e.target.id;
          for (let j = 0; j < todoListItems.length; j++) {
            if (value === todoListItems[j].id) {
              todoListItems[j]["isChecked"] = true;
            }
          }
          
          selectedItem.nextElementSibling.classList.add("strike-off");
        } else {
          for (let j = 0; j < todoListItems.length; j++) {
            if (value === todoListItems[j].id) {
              todoListItems[j]["isChecked"] = false;
            }
          }

          selectedItem.nextElementSibling.classList.remove("strike-off");
        }
      });

    }
}

initTodo();
