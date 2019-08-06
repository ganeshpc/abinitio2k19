import { Injectable } from '@angular/core';
import { Professor } from 'src/app/model/professor.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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
    this.http.post<{message: string}> ('http://localhost:3000/api/professors', professor)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
