import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    gender: '',
    age: 0
  }
  submitted = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      gender: this.user.gender,
      age: this.user.age
    }
    this.usersService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newUser(): void {
    this.submitted = false;
    this.user = {
      firstName: '',
      lastName: '',
      gender: '',
      age: 0
    }
  }

}
