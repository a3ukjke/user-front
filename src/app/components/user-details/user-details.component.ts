import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode = false
  @Input() currentUser: User = {
    id: null,
    firstName: '',
    lastName: '',
    gender: '',
    age: 0
  }

  message = '';

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"])
    }
  }

  getUser(id: any): void {
    this.usersService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateUser(): void {
    this.message = '';
    this.usersService.update(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/users'])
        },
        error: (e) => console.error(e)
      });
  }
}
