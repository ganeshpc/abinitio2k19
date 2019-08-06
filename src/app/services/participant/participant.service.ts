import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from 'src/app/model/participant.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  private participants: Participant[];
  private participantObs = new Subject<Participant[]> ();

  constructor(private http: HttpClient) { }

  getParticipantObservable() {
    return this.participantObs.asObservable();
  }

  getParticipants() {
    this.participantObs.next([...this.participants]);
  }

  addParticipant(participant: Participant) {
    this.http.post<{message: string}> ('http://localhost:3000/api/participants', participant)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
