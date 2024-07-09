import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [{"title":"Labor Relations","description":"Systems Administrator I","isCompleted":false,"isArchived":true,"endDate":"10/14/2023", selected: true},
    {"title":"PDMS Design","description":"Software Engineer III","isCompleted":false,"isArchived":true,"endDate":"8/22/2023", selected: false},
    {"title":"Awareness Raising","description":"Electrical Engineer","isCompleted":true,"isArchived":false,"endDate":"4/25/2024", selected: false},
    {"title":"GL","description":"Account Executive","isCompleted":false,"isArchived":true,"endDate":"11/21/2023", selected: false},
    {"title":"IT Governance","description":"Software Engineer IV","isCompleted":true,"isArchived":false,"endDate":"7/26/2023", selected: false},
    {"title":"NHL","description":"Financial Analyst","isCompleted":false,"isArchived":false,"endDate":"9/9/2023", selected: false},
    {"title":"Bylined Articles","description":"GIS Technical Architect","isCompleted":false,"isArchived":true,"endDate":"5/14/2024", selected: false},
    {"title":"AV Integration","description":"Sales Representative","isCompleted":true,"isArchived":true,"endDate":"12/12/2023", selected: false},
    {"title":"Farms","description":"Web Designer II","isCompleted":false,"isArchived":true,"endDate":"7/12/2023", selected: false},
    {"title":"Ergonomics","description":"Tax Accountant","isCompleted":true,"isArchived":false,"endDate":"10/29/2023", selected: false},
    {"title":"Epicor","description":"Director of Sales","isCompleted":true,"isArchived":false,"endDate":"11/26/2023", selected: false},
    {"title":"Cost Benefit","description":"Product Engineer","isCompleted":false,"isArchived":true,"endDate":"12/17/2023", selected: false},
    {"title":"VGA","description":"VP Accounting","isCompleted":true,"isArchived":false,"endDate":"9/25/2023", selected: false},
    {"title":"CX","description":"GIS Technical Architect","isCompleted":false,"isArchived":true,"endDate":"7/27/2023", selected: false},
    {"title":"Red Hat Linux","description":"Geologist IV","isCompleted":false,"isArchived":true,"endDate":"8/3/2023", selected: false},
    {"title":"Tortoise SVN","description":"Media Manager I","isCompleted":false,"isArchived":false,"endDate":"2/28/2024", selected: false},
    {"title":"Prototype.js","description":"Software Consultant","isCompleted":true,"isArchived":false,"endDate":"3/24/2024", selected: false},
    {"title":"Avionics","description":"Systems Administrator IV","isCompleted":true,"isArchived":false,"endDate":"11/12/2023", selected: false},
    {"title":"TNCC","description":"Social Worker","isCompleted":true,"isArchived":true,"endDate":"3/23/2024", selected: false},
    {"title":"Molecular Cloning","description":"Registered Nurse","isCompleted":false,"isArchived":true,"endDate":"9/1/2023", selected: false}]

    private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

    private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

    public getTodos(): Observable<Array<ITodo>> {
      return this._todoSubject.asObservable();
    }

    public getSingleTodo(): Observable<ITodo> {
      return this._singleTodoSubject.asObservable();
    }

    public setSingleTodo(todo: ITodo): void {
      this._singleTodoSubject.next(todo);
    }

  constructor() { }
}
