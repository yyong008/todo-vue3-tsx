const todoPrefix = "todo-vue-tsx";

export function addStorageTodo(todo: any) {
  let todoLists = getStorageTodos()
  const newLists = JSON.stringify([todo, ...todoLists]);

  localStorage.setItem(todoPrefix, newLists);
}

export function removeStorageTodoById(id: number) {
  let todolists = getStorageTodos()
  todolists = todolists.filter((todo: any) => todo.id !== id);
  localStorage.setItem(todoPrefix, JSON.stringify(todolists))
  return todolists
}

export function modifyStorageTodoById(id: number, content: string) {
  let todolists = getStorageTodos()
  todolists.forEach((todo: any) => {
    if(todo.id === id) {
      todo.content = content;
    }
  })
  return todolists
}

export function modifyCompletedStatusStorageTodoByIdx(idx: number, isCompleted: boolean) {
  let todolists = getStorageTodos()
  todolists.forEach((todo: any, index: number) => {
    if(index === idx) {
      todo.completed = isCompleted;
    }
  })
  localStorage.setItem(todoPrefix, JSON.stringify(todolists))
}

export function modifyContentStorageTodoByIdx(idx: number, content: string) {
  let todolists = getStorageTodos()
  todolists.forEach((todo: any, index: number) => {
    if(index === idx) {
      todo.content = content;
    }
  })
  localStorage.setItem(todoPrefix, JSON.stringify(todolists))
}

export function getStorageTodos() {
  let todosStr = localStorage.getItem(todoPrefix);
  let todoLists = JSON.parse(todosStr? todosStr : "[]");

  return todoLists;
}

export function getStorageTodoId() {
  if (!localStorage.getItem("id")) {
    localStorage.setItem("id", "0");
  } else {
    localStorage.setItem("id", String(Number(localStorage.getItem("id")) + 1));
  }
  return Number(localStorage.getItem("id") ? Number(localStorage.getItem("id")) + 1 : 0);
}

export function setStorageTodoId() {
  localStorage.setItem("id", String(getStorageTodoId() + 1));
}

export function clearCompletedTodos() {
  const cTodos = getStorageTodos()
  const newLists = cTodos.filter((todo: any) => {
    return !todo.completed
  })
  localStorage.setItem(todoPrefix, JSON.stringify(newLists));
}
