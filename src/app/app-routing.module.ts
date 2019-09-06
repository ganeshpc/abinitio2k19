import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CompetitionsComponent } from './components/competitions/competitions/competitions.component';
import { DepartmentsComponent } from './components/departments/departments/departments.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ClubsComponent } from './components/clubs/clubs/clubs.component';
import { CreateCompetitionComponent } from './components/competitions/create-competition/create-competition.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { CreateClubComponent } from './components/clubs/create-club/create-club.component';
import { CreateParticipantComponent } from './components/participants/create-participant/create-participant.component';
import { CreateProfessorComponent } from './components/professors/create-professor/create-professor.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faq', component: FaqComponent},

  {path: 'create-competition', component: CreateCompetitionComponent, canActivate: [AuthGuard]},
  {path: 'create-student', component: CreateStudentComponent, canActivate: [AuthGuard]},
  {path: 'create-department', component: CreateDepartmentComponent, canActivate: [AuthGuard]},
  {path: 'create-club', component: CreateClubComponent, canActivate: [AuthGuard]},
  {path: 'create-participant', component: CreateParticipantComponent, canActivate: [AuthGuard]},
  {path: 'create-professor', component: CreateProfessorComponent, canActivate: [AuthGuard]},
  {path: 'student-login', component: StudentLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
