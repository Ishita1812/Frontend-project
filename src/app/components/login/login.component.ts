import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServService } from '../../services/auth-serv.service';
import { LoginService } from '../../services/login.service';
import { User } from './model/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private serv:LoginService,private rou:Router){}
  private serve:AuthServService=inject(AuthServService);
@ViewChild('studentForm')myStudentForm:NgForm;
      onSubmit(user:User)
      {

      if( (user.username===this.serv.name) && (user.password===this.serv.password))
      {
        alert("User succesfully Logged in");
      // this.rou.navigate(['home']);
        this.serve.login();
       
      }


      
      // else
      // {
      //   alert("Does not match. Try again!!");

      // }
    }
}



