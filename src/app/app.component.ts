import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoFileComponent } from './components/new-todo-file/new-todo-file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TO-DO';

  constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(NewTodoFileComponent, {
      width: '600px',
    });
  }
}
