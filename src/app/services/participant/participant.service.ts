import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from 'src/app/model/participant.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const BASE_URL = environment.apiUrl + '/participants';

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
    this.http.get<{message: string, participants: any}>(BASE_URL)
    .pipe(map(responseData => {
      return {
        participants: responseData.participants.map(participant => {
          return {
            id: participant._id,
            name: participant.name,
            competitionName: participant.competitionName,
            collegeName: participant.collegeName,
            mobNo: participant.mobNo,
            email: participant.email
          };
        }),
        message: responseData.message
      };
    })).subscribe(transformedData => {
      this.participants = transformedData.participants;
      this.participantObs.next([...this.participants]);
    }, err => {
      console.log('Error fetching Participants');
    });
  }

  addParticipant(participant: Participant) {
    this.http.post<{message: string}> (BASE_URL, participant)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
