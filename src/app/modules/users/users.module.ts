import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from '../../services/users.service'
import { UserUpdateComponent } from './user-update/user-update.component';
import { SharedModule } from '../../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UsersListComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule],
  providers: [UsersService],
})
export class UsersModule { }
