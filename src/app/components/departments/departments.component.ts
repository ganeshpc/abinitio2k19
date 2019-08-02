import { Component, OnInit, OnDestroy } from '@angular/core';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department/department.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit, OnDestroy {

  public departments: Department[];
  private departmentSub: Subscription;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentSub = this.departmentService.getDepartmentsObservable().subscribe( (departments: Department[]) => {
      this.departments = departments;
    });

    this.departmentService.getDepartments();
  }

  ngOnDestroy() {
    this.departmentSub.unsubscribe();
  }

}
