import { Component } from '@angular/core';
import data from '../assets/json/data.json';
import { Comment, Reply } from './comment-types.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  comments: Comment[] = data.comments;
  constructor() {
    console.log(this.comments);
  }
  onCommentAdded(comment: Comment) {
    this.comments.push(comment);
  }
}
