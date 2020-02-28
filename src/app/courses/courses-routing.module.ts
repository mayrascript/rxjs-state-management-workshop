import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from 'src/app/courses/components/course-details/course-details.component';
import { CourseFormComponent } from 'src/app/courses/components/course-form/course-form.component';
import { CoursesListComponent } from 'src/app/courses/components/courses-list/courses-list.component';
import { CoursesComponent } from 'src/app/courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CourseFormComponent
      },
      {
        path: 'edit/:id',
        component: CourseFormComponent
      },
      {
        path: 'courses-list',
        component: CoursesListComponent
      },
      {
        path: 'course-details/:id',
        component: CourseDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
