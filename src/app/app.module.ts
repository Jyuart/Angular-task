import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsModule} from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule} from './modules/users/users.module';
import { TeamsModule} from './modules/teams/teams.module';
import { SharedModule} from './shared/shared.module';
import { UnsavedChangesGuard } from './shared/unsaved-changes.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProjectsModule,
    TasksModule,
    UsersModule,
    TeamsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
