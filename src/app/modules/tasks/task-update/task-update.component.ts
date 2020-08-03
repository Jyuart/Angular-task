import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/task';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/shared/unsaved-changes.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit, ComponentCanDeactivate {
  public id: number;
  public task: Task = new Task;
  public editForm: FormGroup;
  public saved: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['taskId'];
              
    this.editForm = this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      createdAt: '',
      finishedAt: '',
      performerId: '',
      projectId: '',
      state: ''
  });
    this.tasksService.getTask(this.id)
        .subscribe(task => {
          this.task = task

          this.editForm.setValue(this.task);
          this.editForm.get('finishedAt').patchValue(this.service.formatDate(this.task.finishedAt));
          this.editForm.get('createdAt').patchValue(this.service.formatDate(this.task.createdAt));
        });
   }

  ngOnInit(): void {
  }

  public updateTask(task: Task) {
    this.tasksService.updateTask(task).subscribe();
  }

  onSubmit(task: Task) {
    this.updateTask(task);
    this.saved = true;
    this.router.navigate(['/tasks']);
  }

  canDeactivate() : boolean | Observable<boolean> {
    if(!this.saved) {
      return confirm("You have unsaved changes. Do you really want to leave?");
    }
    else {
      return true;
    }
  }
}
