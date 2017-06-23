import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    currentUser: any;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
        
    tweets = ['amazing!'];
    newTweet = '';
    addTweet = function() {
      if (this.newTweet !== '') {
      this.tweets.unshift(this.newTweet);
      this.newTweet = '';
      }
    };
    removeTweet = function(index:any) {
      this.tweets.splice(index, 1);
    };


    ngOnInit() {
       // this.user = this.currentUser.message;
      //  this.loadAllUsers();
    }

}
