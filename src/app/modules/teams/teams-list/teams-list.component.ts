import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {  
  public teams: Team[] = []

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  public getTeams() {
    this.teamsService
        .getAllTeams()
        .subscribe(teams => this.teams = teams)
  }

  public deleteTeam(id: number) {
    if(confirm("Are you sure you want to delete this team?")) {
      this.teamsService
      .deleteTeam(id)
      .subscribe();
      window.location.reload()
    }
  }
}
