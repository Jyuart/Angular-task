import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../../models/task';
import { TaskState } from 'src/app/models/task-state.enum';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {  
  public tasks: Task[] = []
  public taskStates = TaskState;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks() {
    this.tasksService
        .getAllTasks()
        .subscribe(tasks => this.tasks = tasks)
  }

  
  public deleteTask(id: number) {
    if(confirm("Are you sure you want to delete this task?")) {
      this.tasksService
      .deleteTask(id)
      .subscribe();
    }
  }
}
