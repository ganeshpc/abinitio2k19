import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const BASE_URL = environment.apiUrl + '/students';

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
    this.http.get<{message: string, students: any}>(BASE_URL)
    .pipe(map(responseData => {
      return {
        students: responseData.students.map(student => {
          return {
            id: student._id,
            name: student.name,
            department: student.department,
            rollNo: student.rollNo,
            mobNo: student.mobNo,
            email: student.email,
            imagePath: student.imagePath
          };
        }),
        message: responseData.message
      };
    })).subscribe(transformedData => {
      this.students = transformedData.students;
      this.studentObj.next([...this.students]);
    }, err => {
      console.log('Error fetching Students');
    });
  }

  addStudent(student: Student) {
    this.http.post<{message: string, student: Student}> ('http://localhost:3000/api/students', student)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
