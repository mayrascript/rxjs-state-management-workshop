import { CourseModel } from 'src/app/core/models/course.model';

export interface AppState {
  courses: CourseModel[];
  currentCourse: CourseModel;
}
