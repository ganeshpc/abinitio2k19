import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
