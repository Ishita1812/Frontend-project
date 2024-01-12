import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { AuthServService } from './services/auth-serv.service';
import { AddblogComponent } from './components/addblog/addblog.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    RouterModule, HeaderComponent,
    AddblogComponent,
   FormsModule, LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-blog-application';

  constructor(private authService: AuthServService) {}

  loginFn() {
    this.authService.login();
  }

  logoutFn() {
    this.authService.logout();
  }
}
