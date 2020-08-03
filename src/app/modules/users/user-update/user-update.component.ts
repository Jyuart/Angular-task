import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/shared/unsaved-changes.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit, ComponentCanDeactivate {
  public id: number;
  public user: User = new User;
  public editForm: FormGroup;
  public saved: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['userId'];
              
    this.editForm = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      birthday: '',
      registeredAt: '',
      teamId: '',
      email: ''
  });
    this.usersService.getUser(this.id)
        .subscribe(user => {
          this.user = user

          this.editForm.setValue(this.user);
          this.editForm.get('registeredAt').patchValue(this.service.formatDate(this.user.registeredAt));
          this.editForm.get('birthday').patchValue(this.service.formatDate(this.user.birthday));
        });
   }

  ngOnInit(): void {
  }

  public updateUser(user: User) {
    this.usersService.updateUser(user).subscribe();
  }

  onSubmit(user: User) {
    this.updateUser(user);
    this.saved = true;
    this.router.navigate(['/users']);
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
