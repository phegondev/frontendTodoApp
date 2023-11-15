import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  currentTodo: any = {id:0, title: '', description:''}

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      if(params.has('id') && params.has('title') && params.has('description')){
        const todoId = params.get('id');
        const title = params.get('title');
        const description = params.get('description');
        this.currentTodo = {id:todoId, title, description}
      }else{
        alert("Hey Yo!! are not authorized to navigate here!!")
      }
    })
  }
  
  updateTodo():void{
    this.todoService.updateTodo(this.currentTodo);
    this.router.navigate(['/'])
  }

  cancelEdit(): void{
    this.router.navigate(['/'])
  }

}
