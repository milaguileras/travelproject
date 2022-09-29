import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'group', component: GroupPageComponent},
  {path: 'register', component: GroupFormComponent},
  {path: 'signup', component: MemberFormComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
