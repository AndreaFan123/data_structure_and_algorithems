// Define todo type

interface TodoType {
  id: number;
  title: string;
  date: Date;
  isCompleted: boolean;
}

class TodoLis {
  private todos: TodoType[] = [];

  // Adding todo
  addTodo(task: TodoType) {
    return this.todos.push(task);
  }

  // remove todo
  removeTodo(taskId: number) {
    // Need to find the index of the task that we want to delete
    const index = this.todos.findIndex((todo) => todo.id === taskId);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  getAllTodos() {
    return [...this.todos];
  }

  toggleComplete(taskId: number) {
    const todo = this.todos.find((todo) => todo.id === taskId);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
      return true;
    }
    return false;
  }
}
