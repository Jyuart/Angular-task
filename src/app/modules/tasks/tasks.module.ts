import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksListComponent} from './tasks-list/tasks-list.component';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [TasksListComponent, TaskUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [TasksService]
})
export class TasksModule { }
