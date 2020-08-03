import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsService } from '../../services/teams.service';
import { TeamUpdateComponent } from './team-update/team-update.component';
import { SharedModule } from '../../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TeamsListComponent, TeamUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [TeamsService],
})
export class TeamsModule { }
