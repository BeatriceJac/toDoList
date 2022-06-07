import { ComponentFixture, TestBed } from '@angular/core/testing';

import { toDoListComponent } from './toDoList.component';

describe('toDoListComponent', () => {
  let component: toDoListComponent;
  let fixture: ComponentFixture<toDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ toDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(toDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
