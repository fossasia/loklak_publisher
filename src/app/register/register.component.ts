import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
    }

  ngOnInit() {
  }

}
