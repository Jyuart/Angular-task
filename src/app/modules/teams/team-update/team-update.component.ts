import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/shared/unsaved-changes.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit, ComponentCanDeactivate {
  public id: number;
  public team: Team = new Team;
  public editForm: FormGroup;
  public saved: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private teamsService: TeamsService,
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['teamId'];
              
    this.editForm = this.formBuilder.group({
      id: '',
      name: '',
      createdAt: '',
  });
    this.teamsService.getTeam(this.id)
        .subscribe(team => {
          this.team = team

          this.editForm.setValue(this.team);
          this.editForm.get('createdAt').patchValue(this.service.formatDate(this.team.createdAt));
        });
   }

  ngOnInit(): void {
  }

  public updateTeam(team: Team) {
    this.teamsService.updateTeam(team).subscribe();
  }

  onSubmit(team: Team) {
    team.createdAt = new Date(team.createdAt);
    this.updateTeam(team);
    this.saved = true;
    this.router.navigate(['/teams']);
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
