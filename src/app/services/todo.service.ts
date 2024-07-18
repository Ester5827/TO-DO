import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [{"id": 1, "title":"Labor Relations","description":"Systems Administrator I","isCompleted":false,"isArchived":false,"endDate":"10/14/2023", selected: false},
    {"id": 2, "title":"PDMS Design","description":"Software Engineer III","isCompleted":false,"isArchived":false,"endDate":"8/22/2023", selected: false},
    {"id": 3, "title":"Awareness Raising","description":"Electrical Engineer","isCompleted":false,"isArchived":false,"endDate":"4/25/2024", selected: false},
    {"id": 4, "title":"GL","description":"Account Executive","isCompleted":false,"isArchived":false,"endDate":"11/21/2023", selected: false},
    {"id": 5, "title":"IT Governance","description":"Software Engineer IV","isCompleted":false,"isArchived":false,"endDate":"7/26/2023", selected: false},
    {"id": 6, "title":"NHL","description":"Financial Analyst","isCompleted":false,"isArchived":false,"endDate":"9/9/2023", selected: false},
    {"id": 7, "title":"Bylined Articles","description":"GIS Technical Architect","isCompleted":false,"isArchived":false,"endDate":"5/14/2024", selected: false},
    {"id": 8, "title":"AV Integration","description":"Sales Representative","isCompleted":false,"isArchived":false,"endDate":"12/12/2023", selected: false},
    {"id": 9, "title":"Farms","description":"Web Designer II","isCompleted":false,"isArchived":false,"endDate":"7/12/2023", selected: false},
    {"id": 10, "title":"Ergonomics","description":"Tax Accountant","isCompleted":false,"isArchived":false,"endDate":"10/29/2023", selected: false},
    {"id": 11, "title":"Epicor","description":"Director of Sales","isCompleted":false,"isArchived":false,"endDate":"11/26/2023", selected: false},
    {"id": 12, "title":"Cost Benefit","description":"Product Engineer","isCompleted":false,"isArchived":false,"endDate":"12/17/2023", selected: false},
    {"id": 13, "title":"VGA","description":"VP Accounting","isCompleted":false,"isArchived":false,"endDate":"9/25/2023", selected: false},
    {"id": 14, "title":"CX","description":"GIS Technical Architect","isCompleted":false,"isArchived":false,"endDate":"7/27/2023", selected: false},
    {"id": 15, "title":"Red Hat Linux","description":"Geologist IV","isCompleted":false,"isArchived":false,"endDate":"8/3/2023", selected: false},
    {"id": 16, "title":"Tortoise SVN","description":"Media Manager I","isCompleted":false,"isArchived":false,"endDate":"2/28/2024", selected: false},
    {"id": 17, "title":"Prototype.js","description":"Software Consultant","isCompleted":false,"isArchived":false,"endDate":"3/24/2024", selected: false},
    {"id": 18, "title":"Avionics","description":"Systems Administrator IV","isCompleted":false,"isArchived":false,"endDate":"11/12/2023", selected: false},
    {"id": 19, "title":"TNCC","description":"Social Worker","isCompleted":false,"isArchived":false,"endDate":"3/23/2024", selected: false},
    {"id": 20, "title":"Molecular Cloning","description":"Registered Nurse","isCompleted":false,"isArchived":false,"endDate":"9/1/2023", selected: false}]

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
