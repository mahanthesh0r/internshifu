import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  LoginUserData = {}

  public id;

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit() {

  }

  Onsubmitt(){
    console.log(this.LoginUserData)
  }
  
  Onsubmit(){
    this.api.getLogin(this.LoginUserData)
   .subscribe(data => {
     console.log(data)
     localStorage.setItem("Token",data.id)
     this.route.navigate(['/'])
   },
    err => console.log(err)
    //  this.id = data.id;
    //  localStorage.setItem("Token",this.id);
    //   console.log("auth", this.id);
    //   console.log(Email,Password)
    )
  }


  }


