import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });;
  
  public getHeaders(): HttpHeaders {
    return this.headers;
}

  public getAllUsers(): Observable<any> {
    return this.httpClient.get<User[]>('http://localhost:5001/api/users', { headers: this.getHeaders() });
  }

  
  public getUser(id: number): Observable<any> {
    return this.httpClient.get<User>(`http://localhost:5001/api/users/${id}`, { headers: this.getHeaders() });
  }

  public updateUser(user: User): Observable<any> {
    return this.httpClient.put('http://localhost:5001/api/users', JSON.stringify(user), { headers: this.getHeaders() });
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:5001/api/users/${id}`, { headers: this.getHeaders() });
  }

  constructor(private httpClient: HttpClient) {}
}