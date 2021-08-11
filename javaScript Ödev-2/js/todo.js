function qById($id) {
  return document.getElementById($id);
}

const toDoContainer = qById("list");
const toDoInput = qById("task");


toDoInput.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    addTodo(event.target.value);
  }
});

let todos = [];

function getLocalStorage() {
  const local = localStorage.getItem("todos");
  if (local) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

getLocalStorage();

function addToList(liste) {
  for (var i = 0; i < liste.length; i++) {
    addTodo(liste[i].text, false);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function addTodo(value, shouldAddList = true) {
  if (value !== "") {
    //Li add
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = value;
    toDoContainer.appendChild(li);
    //alert toast
    $(".success").toast("show");

    //Button add
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "silbuton btn btn-outline-secondary text-black-50";
    li.appendChild(button);

    if (shouldAddList) {
      todos.push({ completed: false, text: value });
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    toDoInput.value = "";
  } else {
    //alert toast
    $(".error").toast("show");
  }
}

addToList([...todos]);

//click event
toDoContainer.addEventListener("click", function (event) {
  var target = event.target;

  if (target && target.nodeName === "LI") {
    toggleChecked(event, "checked");
    

    var sonuc = Array.prototype.slice
      .call(event.target.classList)
      .some(function (ClassName) {
        return ClassName === "checked";
      });

    let domli = Array.prototype.slice.call(toDoContainer.children);
    let domLiIndex = domli.indexOf(event.target);
    todos[domLiIndex].completed = sonuc;

  } else if (target && target.nodeName === "BUTTON") {
    let domtodos = Array.prototype.slice.call(toDoContainer.children);
    let removeItemIndex = domtodos.indexOf(event.target.parentNode);
    todos.splice(removeItemIndex, 1);

    this.removeChild(event.target.parentNode);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});

function toggleChecked(event, className) {
  event.target.classList.toggle(className);
}
