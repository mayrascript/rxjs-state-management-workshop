import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/courses/services/courses-store/courses-store.service';

@Component({
  selector: 'app-course-form-basic-info',
  templateUrl: './course-form-basic-info.component.html',
  styleUrls: ['./course-form-basic-info.component.scss']
})
export class CourseFormBasicInfoComponent implements OnInit {

  basicInfoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private coursesStoreService: CoursesStoreService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.basicInfoForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['']
    });
  }

  createCourse() {
    const {title, desc} = this.basicInfoForm.value;
    const course = {title, desc};
    this.coursesStoreService.addCourse(course);
  }
}
