import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoFileComponent } from './new-todo-file.component';

describe('NewTodoFileComponent', () => {
  let component: NewTodoFileComponent;
  let fixture: ComponentFixture<NewTodoFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTodoFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTodoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
