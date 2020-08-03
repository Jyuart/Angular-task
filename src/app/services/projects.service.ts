import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });;
  
  public getHeaders(): HttpHeaders {
    return this.headers;
}

  public getAllProjects(): Observable<any> {
    return this.httpClient.get<Project[]>('http://localhost:5001/api/projects', { headers: this.getHeaders() });
  }

  public getProject(id: number): Observable<any> {
    return this.httpClient.get<Project>(`http://localhost:5001/api/projects/${id}`, { headers: this.getHeaders() });
  }

  public updateProject(project: Project): Observable<any> {
    return this.httpClient.put('http://localhost:5001/api/projects', JSON.stringify(project), { headers: this.getHeaders() });
  }

  public deleteProject(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:5001/api/projects/${id}`, { headers: this.getHeaders() });
  }

  constructor(private httpClient: HttpClient) {}

}