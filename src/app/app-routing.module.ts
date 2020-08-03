import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './modules/projects/projects-list/projects-list.component';
import { ProjectUpdateComponent } from './modules/projects/project-update/project-update.component';

import { TasksListComponent } from './modules/tasks/tasks-list/tasks-list.component';
import { TaskUpdateComponent } from './modules/tasks/task-update/task-update.component';

import { UsersListComponent} from './modules/users/users-list/users-list.component';
import { UserUpdateComponent} from './modules/users/user-update/user-update.component';

import { TeamsListComponent} from './modules/teams/teams-list/teams-list.component';
import { TeamUpdateComponent} from './modules/teams/team-update/team-update.component';

import { UnsavedChangesGuard } from './shared/unsaved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent},
  { path: 'projects/update/:projectId', component: ProjectUpdateComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'tasks', component: TasksListComponent },
  { path: 'tasks/update/:taskId', component: TaskUpdateComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'users', component: UsersListComponent},
  { path: 'users/update/:userId', component: UserUpdateComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'teams', component: TeamsListComponent },
  { path: 'teams/update/:teamId', component: TeamUpdateComponent, canDeactivate: [UnsavedChangesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
