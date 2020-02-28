import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesRoutingModule } from 'src/app/courses/courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseFormBasicInfoComponent } from './components/course-form/course-form-basic-info/course-form-basic-info.component';
import { CourseFormConfirmComponent } from './components/course-form/course-form-confirm/course-form-confirm.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseFormComponent,
    CoursesListComponent,
    CourseFormBasicInfoComponent,
    CourseFormConfirmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class CoursesModule { }
