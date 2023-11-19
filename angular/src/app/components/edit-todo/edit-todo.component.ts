// edit-todo.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  currentTodo: any = { id: 0, title: '', description: '' };

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private todoService: TodoService) {}

  ngOnInit(): void {
    // Retrieve the todo data from the route
    this.route.paramMap.subscribe((params) => {
      if (params.has('id') && params.has('title') && params.has('description')) {
        const todoId = params.get('id');
        const title = params.get('title');
        const description = params.get('description');
        this.currentTodo = { id: todoId, title, description };
      } else {
        // Handle the case where parameters are missing
        console.error('Invalid parameters for editing todo');
      }
    });
  }

  updateTodo(): void {
    this.todoService.updateTodo(this.currentTodo);
    // After updating, navigate back to the home page
    this.router.navigate(['/']);
  }

  

  cancelEdit(): void {
    // Implement cancel logic
    // After canceling, navigate back to the home page
    this.router.navigate(['/']);
  }
}
