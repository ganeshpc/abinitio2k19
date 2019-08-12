import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from '../../model/department.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl + '/departments';

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
    this.http.get<{message: string, departments: any}>(BASE_URL)
      .pipe(map(responseData => {
        return {
          departments: responseData.departments.map(department => {
            return {
              id: department._id,
              name: department.name,
              hod: department.hod,
              shortDescription: department.shortDescription,
              longDescription: department.longDescription,
              imagePath: department.imagePath
            };
          }),
          message: responseData.message
        };
      })).subscribe(transformedData => {
        this.departments = transformedData.departments;
        this.departmentsObs.next([...this.departments]);
      }, err => {
        console.log('Error fetching Departments');
      });
  }

  addDepartment(department: Department) {
    this.http.post<{message: string}> (BASE_URL, department)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
