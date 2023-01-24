import { Component, Input, ViewChild } from '@angular/core';
import { Comment, Reply } from 'src/app/comment-types.model';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent {
  @Input() comments: Comment[] = [];
  @Input() reply: Reply = {
    id: 0,
    content: '',
    createdAt: '',
    replyingTo: '',
    replies: [],
    score: 0,
    user: {
      image: {
        img: '',
      },
      username: '',
    },
  };
  @Input() comment: Comment = {
    id: 0,
    content: '',
    createdAt: '',
    user: { image: { img: '' }, username: '' },
    replies: [],
    score: 0,
  };
  @Input() replyIndex: number = 0;
  @ViewChild('replyText') replyText: any;
  mainUser: string = 'juliusomo';
  replyUpdateActive: boolean = false;
  showReplyBoxForReply: boolean = false;
  popupActiveOnReply: boolean = false;
  overlayActiveOnReply: boolean = false;
  increaseReplyScore() {
    this.reply.score++;
    this.comment.replies.sort((a: Reply, b: Reply) => b.score - a.score);
  }
  decreaseReplyScore() {
    this.reply.score--;
    this.comment.replies.sort((a: Reply, b: Reply) => b.score - a.score);
  }
  makeReplyEditable() {
    this.replyUpdateActive = true;
    this.replyText.nativeElement.contentEditable = true;
  }
  updateReplyContent() {
    this.replyUpdateActive = false;
    this.replyText.nativeElement.contentEditable = false;
  }
  openReplyBox() {
    this.showReplyBoxForReply = !this.showReplyBoxForReply;
  }
  onReplyOfReplyCreated(reply: Reply) {
    this.comment.replies.push(reply);
  }
  appendPopupOnReply() {
    this.popupActiveOnReply = !this.popupActiveOnReply;
    this.overlayActiveOnReply = !this.overlayActiveOnReply;
  }
  deleteReply() {
    this.comment.replies.splice(this.replyIndex, 1);
  }
}
