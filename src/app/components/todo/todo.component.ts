import { Subscription } from 'rxjs';
import { TodoService } from './../../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit, OnDestroy {

  public constructor(private todoService: TodoService) {}

  private subscription: Subscription = new Subscription()

  public todo: ITodo;


  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe(data => {
        this.todo = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
