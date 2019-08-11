import { Injectable } from '@angular/core';
import { Club } from 'src/app/model/club.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl + '/clubs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private clubs: Club[] = [
   {
    id: '1',
    name: 'rrl',
    department: 'none',
    imagePath: 'image path',
    shortDescription: 'short des',
    longDescription: 'long des',
    teamLeader: 'team leader',
    facultyCoordinator: 'Dr. xyz'
   },
   {
    id: '2',
    name: 'rrl',
    department: 'none',
    imagePath: 'image path',
    shortDescription: 'short des',
    longDescription: 'long des',
    teamLeader: 'team leader',
    facultyCoordinator: 'Dr. xyz'
   }
  ];
  private clubsObs = new Subject<Club[]> ();

  constructor(private http: HttpClient) { }

  getClubsObservable() {
    return this.clubsObs.asObservable();
  }

  getClubs() {
    this.http.get<{message: string, clubs: any}>(BASE_URL)
      .pipe(map(responseData => {
        return {
          clubs: responseData.clubs.map(club => {
            return {
              id: club._id,
              name: club.name,
              department: club.department,
              shortDescription: club.shortDescription,
              longDescription: club.longDescription,
              imagePath: club.imagePath,
              teamLeader: club.teamLeader,
              facultyCoordinator: club.facultyCoordinator
            };
          }),
          message: responseData.message
        };
      })).subscribe(transformedData => {
        this.clubs = transformedData.clubs;
        this.clubsObs.next([...this.clubs]);
      }, err => {
        console.log('Error fetching Clubs');
      });
  }

  addClub(club: Club) {
    this.http.post<{message: string}> (BASE_URL, club)
      .subscribe( (response) => {
        console.log(response);
      });
  }
}
