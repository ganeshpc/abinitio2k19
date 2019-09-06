import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { Competition } from 'src/app/model/competition.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit, OnDestroy {

  public competitions: Competition[];
  private competitionSub: Subscription;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competitionSub = this.competitionService.getCompetitionsObservable().subscribe((competitions: Competition[]) => {
      this.competitions = competitions;
    });

    this.competitionService.getCompetitions();
  }

  ngOnDestroy() {
    this.competitionSub.unsubscribe();
  }
}
