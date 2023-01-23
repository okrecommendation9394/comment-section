import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment, Reply } from 'src/app/comment-types.model';
@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.scss'],
})
export class AddReplyComponent {
  @Input() comments: Comment[] = [];
  @Input() comment: any = {};
  @Output() replyCreated = new EventEmitter<Reply>();
  replyText: string = '';
  id: number = 0;
  addReply() {
    const reply = {
      id: this.id,
      content: this.replyText,
      createdAt: 'Just now',
      replyingTo: this.comment.user.username,
      replies: [],
      score: 0,
      user: {
        image: {
          img: './assets/images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
    };
    this.replyCreated.emit(reply);
    this.replyText = '';
    this.id++;
  }
}
