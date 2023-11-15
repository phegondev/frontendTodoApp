import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService, private router:Router ) { }

  ngOnInit(): void {
  }

  newTodo: any = {title:'', description:''}
  todos: any[] = this.todoService.getTodos();

  addNewTodo(): void{
    if(this.newTodo.title.trim() !== ""){
      this.todoService.addTodo(this.newTodo)
      this.newTodo = {title:'', description:''}
    }else{
      alert("Hey!!, Title is required")
    }
  }

  editTodo(todo: any): void{
    this.router.navigate(['/edit', {id:todo.id, title:todo.title, description:todo.description}])
  }

  deleteTodo(id: number): void{
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
