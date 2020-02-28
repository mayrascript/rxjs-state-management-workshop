import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/core/models/course.model';
import { CoursesStoreService } from 'src/app/courses/services/courses-store/courses-store.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<CourseModel[]>;

  constructor(
    private router: Router,
    private coursesStoreService: CoursesStoreService
  ) { }

  ngOnInit() {
    this.courses$ = this.coursesStoreService.getCourses();
  }

  showDetails(id: number) {
    this.router.navigate(['courses/course-details', id]);
  }


}
