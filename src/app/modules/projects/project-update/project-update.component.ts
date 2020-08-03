import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/shared/unsaved-changes.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit, ComponentCanDeactivate {
  public id: number;
  public project: Project = new Project;
  public editForm: FormGroup;
  public saved: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['projectId'];
              
    this.editForm = this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      createdAt: '',
      deadline: '',
      teamId: '',
      authorId: ''
  });
    this.projectsService.getProject(this.id)
        .subscribe(project => {
          this.project = project

          this.editForm.setValue(this.project);
          this.editForm.get('deadline').patchValue(this.service.formatDate(this.project.deadline));
          this.editForm.get('createdAt').patchValue(this.service.formatDate(this.project.createdAt));
        });
   }

  ngOnInit(): void {
  }

  public updateProject(project: Project) {
    this.projectsService.updateProject(project).subscribe();
  }

  onSubmit(project: Project) {
    this.updateProject(project);
    this.saved = true;
    this.router.navigate(['/projects']);
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
