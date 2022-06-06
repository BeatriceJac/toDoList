import { Component, OnInit } from '@angular/core';
import { TodoList  } from 'src/app/models/toDoList';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class toDoListComponent implements OnInit {
  public tasksList:TodoList[]=[];

  constructor() { 
    this.tasksList.push(new TodoList("Clen Kitchen", "mid"));
    this.tasksList.push(new TodoList("Vacuum", "mid"));
    this.tasksList.push(new TodoList("Ride a horse", "mid"));
    this.tasksList.push(new TodoList("Feed cat", "mid"));
  }

  ngOnInit(): void {
  }

}

console.log ("kahjbfs")