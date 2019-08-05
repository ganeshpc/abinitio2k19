import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {

  form: FormGroup;



  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({

      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      shortDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      longDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(100)]
      }),

      rules: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      feesPer: new FormControl(null, {
        validators: [Validators.required]
      })

      // coordinator: new FormControl(null, {
      //   validators: [Validators.required]
      // }),

      // subCoordinator1: new FormControl(null),

      // subCoordinator2: new FormControl(null)
    });
  }

}
