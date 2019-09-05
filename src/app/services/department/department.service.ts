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

  private departments: Department[];
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
              ...department,
              id: department._id
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
