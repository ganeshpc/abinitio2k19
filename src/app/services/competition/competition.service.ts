import { Injectable } from '@angular/core';
import { Competition } from '../../model/competition.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const BASE_URL = environment.apiUrl + '/competitions';

@Injectable({
  providedIn: 'root'
})

export class CompetitionService {

  private competitions: Competition[];
  private competitionsObs = new Subject<Competition[]>();

  constructor(private http: HttpClient) { }

  getCompetitionsObservable() {
    return this.competitionsObs.asObservable();
  }

  getCompetitions() {
    this.http.get<{message: string, competitions: any}>(BASE_URL)
    .pipe(map(responseData => {
      return {
        competitions: responseData.competitions.map(competition => {
          return {
            id: competition._id,
            name: competition.name,
            department: competition.department,
            imagePath: competition.imagePath,
            shortDescription: competition.shortDescription,
            longDescription: competition.longDescription,
            rules: competition.rules,
            registrationFees: competition.registrationFees,
            feesPer: competition.feesPer,

            coordinator: competition.coordinator,
            subCoordinator1: competition.subCoordinator1,
            subCoordinator2: competition.subCoordinator2
          };
        }),
        message: responseData.message
      };
    })).subscribe(transformedData => {
      this.competitions = transformedData.competitions;
      this.competitionsObs.next([...this.competitions]);
    }, err => {
      console.log('Error fetching Competitions');
    });

    this.competitionsObs.next([...this.competitions]);
  }

  addCompetition(competition: Competition, image: File) {

    const formData = new FormData();

    Object.keys(competition).forEach(key => {
      if (competition[key] != null) {
        formData.append(key, competition[key]);
      }
    });

    formData.append('image', image, competition.name);

    this.http.post<{message: string}> (BASE_URL, formData)
      .subscribe(response => {
        console.log(response);
      });
  }


}
