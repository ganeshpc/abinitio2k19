import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { mimeType } from '../../../validaotors/mime-type.validator';

import { DepartmentService } from 'src/app/services/department/department.service';
import { ClubService } from 'src/app/services/club/club.service';
import { StudentService } from 'src/app/services/student/student.service';
import { ProfessorService } from 'src/app/services/professor/professor.service';

import { Department } from 'src/app/model/department.model';
import { Club } from 'src/app/model/club.model';
import { Student } from 'src/app/model/student.model';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;
  imagePreview: string;

  public departments: Department[];
  public students: Student[];
  public professors: Professor[];

  private departmentsSub: Subscription;
  private studentSub: Subscription;
  private professorSub: Subscription;

  constructor(
    private clubService: ClubService,
    private departmentService: DepartmentService,
    private studentService: StudentService,
    private professorService: ProfessorService
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),

      shortDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(30)]
      }),

      longDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      teamLeader: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)]
      }),

      facultyCoordinator: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)]
      })
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

    this.professorSub = this.professorService.getProfessorObservable()
    .subscribe(professors => {
      this.professors = professors;
    });
    this.professorService.getProfessors();
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

  onSaveClub() {
    const club: Club = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department,
      imagePath: null,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      teamLeader: this.form.value.teamLeader.id,
      facultyCoordinator: this.form.value.facultyCoordinator.id
    };

    this.clubService.addClub(club, this.form.value.image);
    this.form.reset();
  }

  ngOnDestroy() {
    this.departmentsSub.unsubscribe();
    this.studentSub.unsubscribe();
    this.professorSub.unsubscribe();
  }
}
