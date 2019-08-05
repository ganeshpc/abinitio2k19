import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  public departmentNames: string[] = [
    'Computer Science',
    'Automobile',
    'Civil',
    'Electronics and Telecommunication',
    'Instrumentation and Control',
    'Mechanical'
  ];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      rollNo: new FormControl(null, {
        validators: [Validators.required]
      }),

      mobNo: new FormControl(null, {
        validators: [Validators.required]
      }),

      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onSaveStudent() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const student: Student = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department,
      rollNo: this.form.value.rollNo,
      mobNo: this.form.value.mobNo,
      email: this.form.value.email,
      imagePath: null
    };

    this.studentService.addStudent(student);

    this.form.reset();
  }

}
