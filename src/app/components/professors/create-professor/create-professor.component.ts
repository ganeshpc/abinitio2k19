import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor/professor.service';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  public departmentNames: string[] = [
    'Computer Science',
    'Automobile',
    'Civil',
    'Electronics and Telecommunication',
    'Instrumentation and Control',
    'Mechanical'
  ];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      designation: new FormControl(null, {
        validators: [Validators.required]
      }),

      email: new FormControl(null, {
        validators: [Validators.required]
      })

    });
  }

  onSaveProfessor() {

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const professor: Professor = {
      id: null,
      name: this.form.value.name,
      designation: this.form.value.designation,
      department: this.form.value.department,
      email: this.form.value.email,
      imagePath: null
    };

    this.professorService.addProfessor(professor);
  }

}
