import { Injectable } from '@angular/core';
import { Competition } from '../model/competition.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private competitions: Competition[] = [
    {
      id: '1',
      title: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '2',
      title: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '3',
      title: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '4',
      title: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '5',
      title: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    }
  ];

  private competitionsObj = new Subject<Competition[]>();

  constructor() { }

  getCompetitionsObjservable() {
    return this.competitionsObj.asObservable();
  }

  getCompetitions() {
    this.competitionsObj.next([...this.competitions]);
  }
}
