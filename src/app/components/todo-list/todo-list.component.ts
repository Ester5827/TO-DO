import { TodoService } from './../../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit, OnDestroy {

  public constructor(private TodoService: TodoService) { }

  private subscription: Subscription = new Subscription();

  public todos: Array<ITodo> = [];

  public displayTodo(todo: ITodo, index: number): void {
    this.TodoService.setSingleTodo(todo);
    todo.selected = true;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.TodoService.getTodos().subscribe((data)=>{
        this.todos = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
