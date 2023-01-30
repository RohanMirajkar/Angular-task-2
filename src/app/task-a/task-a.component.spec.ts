import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAComponent } from './task-a.component';

describe('TaskAComponent', () => {
  let component: TaskAComponent;
  let fixture: ComponentFixture<TaskAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
