import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });;
  
  public getHeaders(): HttpHeaders {
    return this.headers;
}

  public getAllTeams(): Observable<any> {
    return this.httpClient.get<Team[]>('http://localhost:5001/api/teams', { headers: this.getHeaders() });
  }

  
  public getTeam(id: number): Observable<any> {
    return this.httpClient.get<Team>(`http://localhost:5001/api/teams/${id}`, { headers: this.getHeaders() });
  }

  public updateTeam(team: Team): Observable<any> {
    return this.httpClient.put('http://localhost:5001/api/teams', JSON.stringify(team), { headers: this.getHeaders() });
  }

  public deleteTeam(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:5001/api/teams/${id}`, { headers: this.getHeaders() });
  }

  constructor(private httpClient: HttpClient) {}
}