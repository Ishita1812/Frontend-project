import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { addblog } from '../model/addblog';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {
  constructor(private coursesService:CoursesService,private router:Router){}
  data:any[]=[];

  @ViewChild('userForm')userForm:NgForm
  onSubmit(add:addblog) {
    this.coursesService.courses.push(add);
    this.router.navigate(['\posts']);
  }
  

}


