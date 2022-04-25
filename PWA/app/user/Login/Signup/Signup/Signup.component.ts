import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/service/alertify/alertify.service';
import { UserService } from 'src/app/service/user.service/user.service';
@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = false;
  constructor( private fb:FormBuilder ,private userService:UserService ,private alertify:AlertifyService ) { }

  ngOnInit() {

  this.createSignupForm();
  }

createSignupForm(){
  this.SignupForm=this.fb.group({
    username : [null,Validators.required],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.minLength(8)]],
    confirmer:[null,Validators.required]

  })
}


  get username(){
    return this.SignupForm.get('username')as FormControl;
  }
  get email(){
    return this.SignupForm.get('email')as FormControl;
  }
  get password(){
    return this.SignupForm.get('password')as FormControl;
  }
  get confirmer(){
    return this.SignupForm.get('confirmer')as FormControl;
  }


onSubmit(){
  this.userSubmitted=true;
  if(this.SignupForm.valid){
    this.userService.addUser(this.userData());
  this.SignupForm.reset();
  this.userSubmitted=false;
    this.alertify.success('Congrat, you are successfully Signup');
  }else{
    this.alertify.error  ('Kiindly provide the required fields');
  }

}
userData():User{
  return this.user={
    username:this.username.value,
    email:this.email.value,
    password:this.password.value,
    confirmer:this.confirmer.value
  }
}


}

