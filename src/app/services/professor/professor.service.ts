import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Professor } from 'src/app/model/professor.model';
import { stringify } from 'querystring';

const BASE_URL =  environment.apiUrl + '/professors';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private professors: Professor[];
  private professorObs = new Subject<Professor[]> ();

  constructor(private http: HttpClient) { }

  getProfessorObservable() {
    return this.professorObs.asObservable();
  }

  getProfessors() {
    this.http.get<{message: string, professors: any}>(BASE_URL)
    .pipe(map(responseData => {
      return {
        professors: responseData.professors.map(professor => {
          return {
            id: professor._id,
            name: professor.name,
            department: professor.department,
            designation: professor.designation,
            email: professor.email,
            imagePath: professor.imagePath
          };
        }),
        message: responseData.message
      };
    })).subscribe(transformedData => {
      this.professors = transformedData.professors;
      this.professorObs.next([...this.professors]);
    }, err => {
      console.log('Error fetching professors');
    });
  }

  addProfessor(professor: Professor) {
    this.http.post<{message: string}> (BASE_URL, professor)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
