import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Professor } from 'src/app/model/professor.model';
import { Department } from 'src/app/model/department.model';

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
    this.professorObs.next([...this.professors]);
  }

  addProfessor(professor: Professor) {
    this.http.post<{message: string}> (BASE_URL, professor)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
