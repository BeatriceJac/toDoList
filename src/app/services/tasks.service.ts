import { Injectable } from '@angular/core';
import { TodoList } from '../models/toDoList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasksList:TodoList[]=[];
  constructor() { 
    
    this.tasksList.push(new TodoList("Clen Kitchen", "mid"));
    this.tasksList.push(new TodoList("Vacuum", "mid"));
    this.tasksList.push(new TodoList("Ride a horse", "mid"));
    
  }

  public addtask(name:string, priority:string){
    this.tasksList.push(new TodoList (name, priority))
  }
}
