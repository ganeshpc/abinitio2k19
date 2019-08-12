import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor/professor.service';
import { Professor } from 'src/app/model/professor.model';
import { Department } from 'src/app/model/department.model';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;

  public departments: Department[];
  private departmentsSub: Subscription;

  constructor(private professorService: ProfessorService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      designation: new FormControl(null, {
        validators: [Validators.required]
      }),

      email: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.departmentsSub = this.departmentService.getDepartmentsObservable()
    .subscribe(departments => {
      this.departments = departments;
    });
    this.departmentService.getDepartments();
  }

  onSaveProfessor() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const professor: Professor = {
      id: null,
      name: this.form.value.name,
      designation: this.form.value.designation,
      department: this.form.value.department.id,
      email: this.form.value.email,
      imagePath: null
    };

    this.professorService.addProfessor(professor);
  }

  ngOnDestroy() {
    this.departmentsSub.unsubscribe();
  }

}
