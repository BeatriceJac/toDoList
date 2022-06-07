import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})



export class NewTaskComponent implements OnInit {

  public task:string="";
  public priority:string = "";

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  public addTask(){
    this.tasksService.addtask(this.task, this.priority);
  }
  
};


