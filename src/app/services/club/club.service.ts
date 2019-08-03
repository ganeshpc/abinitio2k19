import { Injectable } from '@angular/core';
import { Club } from 'src/app/model/club.model';
import { Subject } from 'rxjs';

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

  constructor() { }

  getClubsObservable() {
    return this.clubsObs.asObservable();
  }

  getClubs() {
    this.clubsObs.next([...this.clubs]);
  }
}
