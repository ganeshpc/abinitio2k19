import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/model/department.model';

@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.css']
})
export class DepartmentCardComponent implements OnInit {

  @Input() department: Department;

  constructor() { }

  ngOnInit() {
  }

}
