export class PullRequest {
 title: string;
 created_at: string;
 author: string;
 html_url: string;

 constructor(
  title: string,
  created_at: string,
  author: string,
  html_url: string
 ) {
  this.title = title;
  this.created_at = created_at;
  this.author = author;
  this.html_url = html_url;
 }
}
