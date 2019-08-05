import { Injectable } from '@angular/core';
import { Competition } from '../../model/competition.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CompetitionService {

  private competitions: Competition[] = [
    {
      id: '1',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '2',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '3',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '4',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '5',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '6',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '7',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '8',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '9',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    },
    {
      id: '10',
      name: 'electrospark',
      department: 'computer',
      imagePath: 'backend/image.png',
      shortDescription: 'hi hi this is the short descriptio of the event adsf jhasfdjha fasdgha fdas fdf afaddkjgkafs sadf gkgfsa asf ksdfa sda ghhksfd fdsag ksdaf gsdaf hsfadj fs ggsfdg sdf gasf',
      longDescription: 'hiiii',
      rules: 'no rules',
      registrationFees: 0,
      feesPer: 'competitor',
      coordinator: 'no one',
      subCoordinator1: 'any one',
      subCoordinator2: 'some one'
    }
  ];

  private competitionsObs = new Subject<Competition[]>();

  constructor(private http: HttpClient) { }

  getCompetitionsObservable() {
    return this.competitionsObs.asObservable();
  }

  getCompetitions() {
    this.competitionsObs.next([...this.competitions]);
  }

  addCompetition(competition: Competition) {

    this.http.post<{message: string}> ('http://localhost:3000/api/competitions', competition)
      .subscribe( (response) => {
        console.log(response);
      });
  }


}
