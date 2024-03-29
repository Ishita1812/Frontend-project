import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit{
  constructor(private coursesService: CoursesService) {}

  courses: any[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
