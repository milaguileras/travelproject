import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GroupPageComponent } from './group-page/group-page.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path:'group', component:GroupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
