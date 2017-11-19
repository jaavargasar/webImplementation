export class Post{
  userId:string;
  id: string;
  title: string;
  body: string;
  comments: Comment[];

  constructor(userId:string, id:string, title: string, body:string, comments?: Comment[] ){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    if(comments) this.comments = comments;
  }

  setComment(comments: Comment[]){
    this.comments= comments;
  }
}
