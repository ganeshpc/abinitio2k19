import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from '../../model/department.model';
import { HttpClient } from '@angular/common/http';

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
      longDescription: 'long description',

      imagePath: null
    },
    {
      id: '2',
      name: 'Auto',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description',

      imagePath: null
    },
    {
      id: '3',
      name: 'Mech',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description',

      imagePath: null
    },
    {
      id: '4',
      name: 'Instru',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description',

      imagePath: null
    },
    {
      id: '5',
      name: 'ENTC',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description',

      imagePath: null
    },
    {
      id: '6',
      name: 'Civil',
      hod: 'HOD COMP',

      shortDescription: 'this is short description',
      longDescription: 'long description',

      imagePath: null
    }
  ];

  private departmentsObs = new Subject<Department[]> ();

  constructor(private http: HttpClient) { }

  getDepartmentsObservable() {
    return this.departmentsObs.asObservable();
  }

  getDepartments() {
    this.departmentsObs.next([...this.departments]);
  }

  addDepartment(department: Department) {
    this.http.post<{message: string}> ('http://localhost:3000/api/departments', department)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
