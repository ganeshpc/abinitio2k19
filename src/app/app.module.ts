import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MainNavComponent } from './navigation/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CompetitionsComponent } from './components/competitions/competitions/competitions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DepartmentsComponent } from './components/departments/departments/departments.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionCardComponent } from './components/competitions/competition-card/competition-card.component';
import { DepartmentCardComponent } from './components/departments/department-card/department-card.component';
import { ClubsComponent } from './components/clubs/clubs/clubs.component';
import { ClubCardComponent } from './components/clubs/club-card/club-card.component';
import { CreateCompetitionComponent } from './components/competitions/create-competition/create-competition.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { CreateClubComponent } from './components/clubs/create-club/create-club.component';
import { CreateParticipantComponent } from './components/participants/create-participant/create-participant.component';
import { CreateProfessorComponent } from './components/professors/create-professor/create-professor.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CompetitionsComponent,
    AboutUsComponent,
    ContactUsComponent,
    DepartmentsComponent,
    FaqComponent,
    HomeComponent,
    CompetitionCardComponent,
    DepartmentCardComponent,
    ClubsComponent,
    ClubCardComponent,
    CreateCompetitionComponent,
    CreateStudentComponent,
    CreateDepartmentComponent,
    CreateClubComponent,
    CreateParticipantComponent,
    CreateProfessorComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
