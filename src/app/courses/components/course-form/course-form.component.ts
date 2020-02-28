import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/core/models/course.model';
import { CoursesStoreService } from 'src/app/courses/services/courses-store/courses-store.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  isLinear = false;
  currentCourse$: Observable<CourseModel>;

  constructor(
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    this.currentCourse$ = this.coursesStoreService.getCurrentCourse();
  }
}
