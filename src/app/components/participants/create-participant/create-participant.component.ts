import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { Participant } from 'src/app/model/participant.model';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.css']
})
export class CreateParticipantComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  competitions: string[] = [
    'Rubics',
    'code gen',
    'code vita',
    'chef',
    'hacker rank'
  ];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      competitionName: new FormControl(null, {
        validators: [Validators.required]
      }),

      collegeName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      mobNo: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(10)]
      }),

      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onSaveParticipant() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const participant: Participant = {
      id: null,
      name: this.form.value.name,
      competitioneName: this.form.value.competitionName,
      collegeName: this.form.value.collegeName,
      mobNo: this.form.value.mobNo,
      email: this.form.value.email
    };

    this.participantService.addParticipant(participant);

    this.form.reset();
  }

}
