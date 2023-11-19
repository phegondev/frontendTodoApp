import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'edit', component: EditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
