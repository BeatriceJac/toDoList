import { Component, OnInit } from '@angular/core';
import { TodoList  } from 'src/app/models/toDoList';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class toDoListComponent implements OnInit {
  public tasksList:TodoList[]=[];

  constructor(private tasksService:TasksService) { 
  }

  ngOnInit(): void {
    this.tasksList=this.tasksService.tasksList
  }
}
