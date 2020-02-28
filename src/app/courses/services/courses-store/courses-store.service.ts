import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CourseModel } from 'src/app/core/models/course.model';
import { actions } from 'src/app/core/services/store/actions';
import { AppState } from 'src/app/core/services/store/app-state';
import { select } from 'src/app/core/services/store/operators';
import { StoreService } from 'src/app/core/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  static count = 0;

  constructor(private storeService: StoreService<AppState>) {
  }

  getCourses(): Observable<CourseModel[]> {
    return this.storeService
      .pipe(
        select('courses'),
        tap(console.log)
      );
  }

  getCurrentCourse(): Observable<CourseModel> {
    return this.storeService
      .pipe(
        select('currentCourse'),
        tap((currentCourse) => console.log('currentCourse', currentCourse))
      );
  }

  addCourse(course: CourseModel) {
    CoursesStoreService.count += 1;
    course = {...course, id: CoursesStoreService.count};
    this.storeService.dispatch({type: actions.add, payload: {course}});
  }

  updateCourse(course: CourseModel) {
    this.storeService.dispatch({type: actions.update, payload: {course}});
  }

  remove(courseId: string) {
    this.storeService.dispatch({type: actions.remove, payload: {courseId}});
  }
}
