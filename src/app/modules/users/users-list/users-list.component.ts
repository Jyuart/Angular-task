import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {  
  public users: User[] = []

  constructor(
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.usersService
        .getAllUsers()
        .subscribe(users => this.users = users)
  }

  public deleteUser(id: number) {
    if(confirm("Are you sure you want to delete this user?")) {
      this.usersService
      .deleteUser(id)
      .subscribe();
      window.location.reload()
    }
  }
}
