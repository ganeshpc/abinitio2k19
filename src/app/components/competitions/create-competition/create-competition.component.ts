import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { Competition } from 'src/app/model/competition.model';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {

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

  public feesPerOptions: string[] = [
    'per Participant',
    'per Team'
  ];

  constructor(private competitionService: CompetitionService) { }

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

      registrationFees: new FormControl(null, {
        validators: [Validators.required]
      }),

      feesPer: new FormControl(null, {
        validators: [Validators.required]
      }),

      coordinator: new FormControl(null, {
        validators: [Validators.required]
      })

      // subCoordinator1: new FormControl(null),

      // subCoordinator2: new FormControl(null)
    });
  }

  onSaveCompetition() {
    if(this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const competition: Competition = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department,
      imagePath: null,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      rules: this.form.value.rules,
      registrationFees: this.form.value.registrationFees,
      feesPer: this.form.value.feesPer,
      coordinator: this.form.value.coordinator,
      subCoordinator1: null,
      subCoordinator2: null
    };

    this.competitionService.addCompetition(competition);

    this.form.reset();
  }

}
