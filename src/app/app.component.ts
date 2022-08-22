import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersService} from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-web';

  constructor() {}

  ngOnInit(): void {
  }

}
