import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club/club.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  public departmentNames: string[] = [
    'Computer Science',
    'Automobile',
    'Civil',
    'Electronics and Telecommunication',
    'Instrumentation and Control',
    'Mechanical'
  ];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      department: new FormControl(null, {
        validators: [Validators.required]
      }),

      shortDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(30)]
      }),

      longDescription: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(50)]
      }),

      teamLeader: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)]
      }),

      facultyCoordinator: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)]
      })
    });
  }

  onSaveClub() {
    const club: Club = {
      id: null,
      name: this.form.value.name,
      department: this.form.value.department,
      imagePath: null,
      shortDescription: this.form.value.shortDescription,
      longDescription: this.form.value.longDescription,
      teamLeader: this.form.value.teamLeader,
      facultyCoordinator: this.form.value.facultyCoordinator
    };

    this.clubService.addClub(club);
  }
}
