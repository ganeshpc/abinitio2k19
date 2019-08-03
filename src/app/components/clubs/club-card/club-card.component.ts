import { Component, OnInit, Input } from '@angular/core';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent implements OnInit {

  @Input() club: Club;

  constructor() { }

  ngOnInit() {
  }

}
