import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public  posts = [];
  
  constructor (private postService:ApiService, private router: Router) { }


  ngOnInit() {
    this.postService.getPosts()
    .subscribe(data => {
      this.posts = data;
      console.log("posts", this.posts);
    });
    
  }

  getPosts() {
    
  }

  onSelect(post){
    this.router.navigate(['/detail', post.id]);
  }
}
