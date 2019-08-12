import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { Participant } from 'src/app/model/participant.model';
import { Competition } from 'src/app/model/competition.model';
import { Subscription } from 'rxjs';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.css']
})
export class CreateParticipantComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isLoading = false;

  public competitions: Competition[];
  private competitionSub: Subscription;

  constructor(private participantService: ParticipantService, private competitionService: CompetitionService) { }

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

    this.competitionSub = this.competitionService.getCompetitionsObservable()
    .subscribe(competitions => {
      this.competitions = competitions;
    });
    this.competitionService.getCompetitions();
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
  }

  ngOnDestroy() {
    this.competitionSub.unsubscribe();
  }

}
