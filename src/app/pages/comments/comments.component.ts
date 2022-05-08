import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../../shared/services/comment.service';
import { Comment } from '../../shared/models/Comment';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
import { throws } from 'assert';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentObject: any = {};
  comments: Array<any> = [];
  user?: User
  modositas : boolean = false;
  updatec : Comment = {id: '', username: '', title: '', comment: '', date: 0};

  commentsForm = this.createForm({
    id: '',
    title: '',
    username: '',
    comment: '',
    date: 0
  });

  constructor(private fb: FormBuilder, private commentService: CommentService, private userService: UserService) { }


  ngOnInit(): void {
    this.commentService.getAll().subscribe(comments => {
      this.comments = comments;
    })
    const usr = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(usr.uid).subscribe(data => {
      this.user = data;      
      this.commentsForm.get('username')?.setValue(this.user?.username);
    }, error => {
      console.error(error);
    })
  }

  createForm(model: Comment){
    let formGroup =  this.fb.group(model);
    return formGroup;
  }

  addComment(){
    if (this.commentsForm.valid){
      if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
        this.commentsForm.get('date')?.setValue(new Date().getTime());
      }
      this.commentService.create(this.commentsForm.value).then(_ => {
      }).catch(error => {
        console.log(error);
      })
    }
  }

  deleteComment(id: string){
    this.commentService.delete(id).then(_ => {
    }).catch(error =>{
      console.log(error);
    });
  }

  update(comment: Comment){
    this.updatec = comment;
    this.modositas = true;
    this.commentsForm.get('title')?.setValue(comment.title);
    this.commentsForm.get('comment')?.setValue(comment.comment);

  }

  updateComment(title: string, comment: string){
    this.updatec.title = title;
    this.updatec.comment = comment;
    this.updatec.date = new Date().getTime();
    this.commentService.update(this.updatec).then(_ => {
      this.modositas = false;
    }).catch(error => {
      console.log(error);
    })
  }

  //pattern jelszó, email, stb stb :3
}
