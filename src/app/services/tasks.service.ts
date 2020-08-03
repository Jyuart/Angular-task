import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });;
  
  public getHeaders(): HttpHeaders {
    return this.headers;
}

  public getAllTasks(): Observable<any> {
    return this.httpClient.get<Task[]>('http://localhost:5001/api/tasks', { headers: this.getHeaders() });
  }

  
  public getTask(id: number): Observable<any> {
    return this.httpClient.get<Task>(`http://localhost:5001/api/tasks/${id}`, { headers: this.getHeaders() });
  }

  public updateTask(task: Task): Observable<any> {
    return this.httpClient.put('http://localhost:5001/api/tasks', JSON.stringify(task), { headers: this.getHeaders() });
  }

  public deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:5001/api/tasks/${id}`, { headers: this.getHeaders() });
  }

  constructor(private httpClient: HttpClient) {}
}