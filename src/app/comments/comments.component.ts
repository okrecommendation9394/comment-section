import { Component, Input, ViewChild } from '@angular/core';
import { Comment, Reply } from '../comment-types.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() comments: Comment[] = [];
  @Input() comment: Comment = {
    id: 0,
    content: '',
    createdAt: '',
    user: { image: { img: '' }, username: '' },
    replies: [],
    score: 0,
  };
  @Input() commentIndex: number = 0;
  @ViewChild('commentText') commentText: any;
  mainUser: string = 'juliusomo';
  showReplyBox: boolean = false;
  showUpdateButton: boolean = false;
  popupActive: boolean = false;
  overlayActive: boolean = false;

  increaseCommentScore() {
    this.comment.score++;
    this.comments.sort((a, b) => b.score - a.score);
  }
  decreaseCommentScore() {
    this.comment.score--;
    this.comments.sort((a, b) => b.score - a.score);
  }
  openReplyBox() {
    this.showReplyBox = this.showReplyBox ? false : true;
  }
  onReplyCreated(reply: Reply) {
    this.comment.replies.push(reply);
  }
  makeCommentEditable() {
    this.showUpdateButton = this.showUpdateButton ? false : true;
    this.commentText.nativeElement.contentEditable = true;
  }
  updateCommentContent() {
    this.showUpdateButton = false;
    this.commentText.nativeElement.contentEditable = false;
  }
  appendPopup() {
    this.popupActive = !this.popupActive;
    this.overlayActive = !this.overlayActive;
  }
  deleteComment() {
    this.comments.splice(this.commentIndex, 1);
  }
}
