import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department/department.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Department } from 'src/app/model/department.model';
import { mimeType } from '../../../validaotors/mime-type.validator';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  imagePreview: string;

  public departmentNames: string[] = [
    'Computer Science',
    'Automobile',
    'Civil',
    'Electronics and Telecommunication',
    'Instrumentation and Control',
    'Mechanical'
  ];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      hod: new FormControl(null, {
        validators: [Validators.minLength(4)]
      }),

      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),

      shortDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(30)]
      }),

      longDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      })
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = (reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  onSaveDepartment() {
    const department: Department = {
      id: null,
      name: this.form.value.name,
      hod: this.form.value.hod,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      imagePath: null
    };

    this.departmentService.addDepartment(department, this.form.value.image);
  }

}
