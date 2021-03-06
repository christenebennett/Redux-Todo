export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    newTodo: { id: Date.now(), value: todo, completed: false } 
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    id: todoId
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    id: todoId
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  }
}
