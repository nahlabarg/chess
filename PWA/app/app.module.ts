import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { CentreJeuxComponent } from './centre-jeux/centre-jeux.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/Login/Login/Login.component';
import { SignupComponent } from './user/Login/Signup/Signup/Signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertifyService } from './service/alertify/alertify.service';
import { AuthServiceService } from './service/user/auth.service';
import { UserService } from './service/user.service/user.service';
import { HttpClient } from '@angular/common/http';

const appRoutes:Routes=[

  {path:'accueil',component:AccueilComponent },
  {path:'centre-jeux',component:CentreJeuxComponent },
  {path:'Login',component:LoginComponent },
  {path:'Signup',component:SignupComponent },
  {path:'**',component:AccueilComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CentreJeuxComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClient
  ],
  providers: [AuthServiceService,UserService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
