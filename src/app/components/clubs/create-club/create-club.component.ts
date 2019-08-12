import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DepartmentService } from 'src/app/services/department/department.service';
import { Department } from 'src/app/model/department.model';
import { ClubService } from 'src/app/services/club/club.service';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;

  public departments: Department[];
  private departmentsSub: Subscription;

  constructor(private clubService: ClubService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
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
  }

  onSaveClub() {
    const club: Club = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department,
      imagePath: null,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      teamLeader: this.form.value.teamLeader,
      facultyCoordinator: this.form.value.facultyCoordinator
    };

    this.clubService.addClub(club);
    this.form.reset();
  }

  ngOnDestroy() {
    this.departmentsSub.unsubscribe();
  }
}
