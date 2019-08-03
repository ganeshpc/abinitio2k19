import { Component, OnInit, OnDestroy } from '@angular/core';
import { Club } from 'src/app/model/club.model';
import { ClubService } from 'src/app/services/club/club.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit, OnDestroy {

  public clubs: Club[] = [];
  private clubSub: Subscription;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubSub = this.clubService.getClubsObservable().subscribe( (clubs: Club[]) => {
      this.clubs = clubs;
    });

    this.clubService.getClubs();
  }

  ngOnDestroy() {
    this.clubSub.unsubscribe();
  }

}
