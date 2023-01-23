import { Component, Output, EventEmitter } from '@angular/core';
import { Comment, Reply } from '../comment-types.model';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {
  @Output() commentCreated = new EventEmitter<Comment>();
  commentText: string = '';
  id: number = 0;
  addComment() {
    this.commentCreated.emit({
      id: this.id,
      content: this.commentText,
      createdAt: 'Just now',
      user: {
        image: {
          img: './assets/images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
      replies: [],
      score: 0,
    });
    this.commentText = '';
    this.id++;
  }
}
