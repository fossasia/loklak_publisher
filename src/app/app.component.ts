import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'My Page';
    tweets = ['amazing!'];
    newTweet = '';
    addTweet = function() {
      if (this.newTweet !== '') {
      this.tweets.unshift(this.newTweet);
      this.newTweet = '';
      }
    };
    removeTweet = function(index) {
      this.tweets.splice(index, 1);
    };
}
