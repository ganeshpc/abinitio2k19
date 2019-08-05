import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private students: Student[];

  private studentObj = new Subject<Student[]> ();

  constructor(private http: HttpClient) { }

  getStudentObservable() {
    return this.studentObj.asObservable();
  }

  getStudents() {
    this.studentObj.next([...this.students]);
  }

  addStudent(student: Student) {
    this.http.post<{message: string, student: Student}> ('http://localhost:3000/api/students', student)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
