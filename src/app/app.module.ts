import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ReplyComponent } from './comments/reply/reply.component';
import { AddReplyComponent } from './comments/add-reply/add-reply.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [AppComponent, CommentsComponent, ReplyComponent, AddReplyComponent, AddCommentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
