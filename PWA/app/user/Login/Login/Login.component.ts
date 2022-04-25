import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/service/alertify/alertify.service';
import { AuthServiceService } from 'src/app/service/user/auth.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authUsers:AuthServiceService,
              private alertyfy:AlertifyService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogin(LoginForm:NgForm){
   const token=  this.authUsers.authUser(LoginForm.value);
   if(token){
     localStorage.setItem('token',token.username)
     this.alertyfy.success('login successfull');
     this.router.navigate(['/accueil'])
   }else{
     this.alertyfy.error('login refused');
   }
  }

postdata(LoginForm:NgForm){

}

}
