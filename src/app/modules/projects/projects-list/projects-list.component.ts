import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {  
  public projects: Project[] = []

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts() {
    this.projectsService
        .getAllProjects()
        .subscribe(projects => this.projects = projects)
  }

  public deleteProject(id: number) {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectsService
      .deleteProject(id)
      .subscribe();
      window.location.reload()
    }
  }
}
