import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { Subscription } from 'rxjs';

import { mimeType } from '../../../validaotors/mime-type.validator';

import { Competition } from 'src/app/model/competition.model';
import { Department } from 'src/app/model/department.model';
import { Student } from 'src/app/model/student.model';

import { DepartmentService } from 'src/app/services/department/department.service';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;
  imagePreview: string;

  public departments: Department[];
  private departmentsSub: Subscription;

  public students: Student[];
  private studentSub: Subscription;

  public feesPerOptions: string[] = [
    'per Participant',
    'per Team'
  ];

  constructor(private competitionService: CompetitionService,
              private departmentService: DepartmentService,
              private studentService: StudentService
              ) { }

  ngOnInit() {
    this.form = new FormGroup({

      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      shortDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),

      longDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(100)]
      }),

      rules: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      registrationFees: new FormControl(null, {
        validators: [Validators.required]
      }),

      feesPer: new FormControl(null, {
        validators: [Validators.required]
      }),

      coordinator: new FormControl(null, {
        validators: [Validators.required]
      })

      // subCoordinator1: new FormControl(null),

      // subCoordinator2: new FormControl(null)
    });

    this.departmentsSub = this.departmentService.getDepartmentsObservable()
    .subscribe(departments => {
      this.departments = departments;
    });
    this.departmentService.getDepartments();

    this.studentSub = this.studentService.getStudentObservable()
    .subscribe(students => {
      this.students = students;
    });
    this.studentService.getStudents();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = (reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  onSaveCompetition() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const competition: Competition = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department.id,
      imagePath: null,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      rules: this.form.value.rules,
      registrationFees: this.form.value.registrationFees,
      feesPer: this.form.value.feesPer,
      coordinator: this.form.value.coordinator.id,
      subCoordinator1: null,
      subCoordinator2: null
    };

    this.competitionService.addCompetition(competition, this.form.value.image);
  }

  ngOnDestroy() {
    this.departmentsSub.unsubscribe();
    this.studentSub.unsubscribe();
  }

}
