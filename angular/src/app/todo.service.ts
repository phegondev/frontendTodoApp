import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = [];


  constructor() { }

  getTodos(): any[] {
    return this.todos;
  }

  addTodo(newTodo: any): void {
    const todo = { id: Date.now(), ...newTodo };
    this.todos.push(todo);
  }


  updateTodo(updatedTodo: any): void {
    const index = this.todos.findIndex((todo) => todo.id.toString() === updatedTodo.id.toString());
    this.todos[index] = { ...updatedTodo };
  }


  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
