import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from '../../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {
      id: '1',
      name: 'Computer',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    },
    {
      id: '2',
      name: 'Auto',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    },
    {
      id: '3',
      name: 'Mech',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    },
    {
      id: '4',
      name: 'Instru',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    },
    {
      id: '5',
      name: 'ENTC',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    },
    {
      id: '6',
      name: 'Civil',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description'
    }
  ];

  private departmentsObs = new Subject<Department[]> ();

  constructor() { }

  getDepartmentsObservable() {
    return this.departmentsObs.asObservable();
  }

  getDepartments() {
    this.departmentsObs.next([...this.departments]);
  }
}
