import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { CampusInvolvementComponent } from './campus-involvement/campus-involvement.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'jobs', component: JobHistoryComponent},
  {path: 'rockchalk', component: CampusInvolvementComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactMeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JobHistoryComponent,
    CampusInvolvementComponent,
    SkillsComponent,
    ContactMeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CampusInvolvementComponent]
})
export class AppModule { }
