import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // Inject TodoService in the constructor
  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void { }

  newTodo: any = { title: '', description: '' }; // Make sure this line is correct
  // editingTodo: any = null;

  // Use this.todoService.getTodos() instead of this.todos
  todos: any[] = this.todoService.getTodos();

  // Update other methods to use this.todoService as well
  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    // Update the local todos array after deletion
    this.todos = this.todoService.getTodos();
  }



  editTodo(todo: any): void {
    this.router.navigate(['/edit', { id: todo.id, title: todo.title, description: todo.description }]);
  }

  addNewTodo(): void {
    if (this.newTodo.title.trim() !== '') {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = { title: '', description: '' };
    } else {
      alert("Title is mandatory")
    }
  }
}
