import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsInterface } from '../models/Ipost';
import { userCredentialsInterface } from '../models/IuserCredentials';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PostsURL: string = "http://localhost:3000/api/posts";
  UserURL: string = "http://localhost:3000/api/Users/"


  constructor(private httpClient: HttpClient, private router: Router) { }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  getPosts(): Observable<PostsInterface[]> {
    return this.httpClient.get<PostsInterface[]>(this.PostsURL);

  }

  getDetail(id): Observable<PostsInterface[]> {
    return this.httpClient.get<PostsInterface[]>(this.PostsURL + '/' + id);
  }

  getLogin(user): Observable<userCredentialsInterface>{
    return this.httpClient.post<userCredentialsInterface>(this.UserURL + 'login',
    user, this.httpOptions);
    
  }

  UserLoggedIn(){
    return !!localStorage.getItem('Token')
    
  }
  UserLogout(){
    var x = confirm("Are you sure you want to logout?")
    if(x == true){
      localStorage.removeItem('Token')
      this.router.navigate(['/'])
    }
    else{
      return false
    }
    


  }

}

