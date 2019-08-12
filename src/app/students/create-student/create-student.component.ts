import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/model/student.model';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department/department.service';
import { AuthData } from 'src/app/auth/auth-data.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;

  public designations: string[] = [
    'Event Coordinator',
    'Sub-Coordinator',
    'Department Head',
    'Abinitio Head',
    'Publicity Head',
    'Team Member'
  ];

  public departments: Department[];
  private departmentsSub: Subscription;

  constructor(private studentService: StudentService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      designation: new FormControl(null, {
        validators: [Validators.required]
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
      }),

      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      })
    });

    this.departmentsSub = this.departmentService.getDepartmentsObservable()
    .subscribe(departments => {
      this.departments = departments;
    });
    this.departmentService.getDepartments();
  }

  onSaveStudent() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const student: Student = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department.id,
      rollNo: this.form.value.rollNo,
      mobNo: this.form.value.mobNo,
      email: this.form.value.email,
      imagePath: null,
      designation: this.form.value.designation,
    };

    const authData: AuthData = {
      id: null,
      email: this.form.value.email,
      password: this.form.value.password,
      userInfo: null
    };

    this.studentService.addStudent(student, authData);
  }

  ngOnDestroy() {
    this.departmentsSub.unsubscribe();
  }

}
