import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
//import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
//import { ErrorComponent } from './components/error/error.component';
import { CourseComponent } from './components/courses/course/course.component';
import { authenticationGuard } from './authentication.guard';
import { courseGuard } from './course.guard';

//import { contactGuard } from './contact.guard';
import { AddblogComponent } from './components/addblog/addblog.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path:'', component: LoginComponent},
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent,canActivate:[authenticationGuard]},

  { path: 'about', component: AboutComponent,canActivate:[authenticationGuard]},
  //{ path: 'contact', component: ContactComponent, canDeactivate: [contactGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [authenticationGuard]},
  { path: 'addblog', component: AddblogComponent, canActivate: [authenticationGuard]},
  {path:'header', component: HeaderComponent},
  {path:'add',component:AddblogComponent,canActivate:[authenticationGuard]},

  // { path: 'courses/course/:id', component: CourseComponent },
  { path: 'courses', canActivateChild : [courseGuard],  children : [
    {path: 'course/:id', component: CourseComponent},
  ] },
  // { path: '**', component: ErrorComponent },
];

