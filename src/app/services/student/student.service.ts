import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth-service.service';
import { AuthData } from 'src/app/auth/auth-data.model';

const BASE_URL = environment.apiUrl + '/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[];
  private studentObj = new Subject<Student[]> ();

  constructor(private http: HttpClient, private authService: AuthService) { }

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

  addStudent(student: Student, user: AuthData) {
    this.http.post<{message: string, student: any}> (BASE_URL, student)
      .subscribe(response => {
        console.log('add student response' + response);
        const userWithInfo: AuthData = {
          id: null,
          email: user.email,
          password: user.password,
          userInfo: response.student._id
        };

        this.authService.createUser(userWithInfo);
      });
  }
}
