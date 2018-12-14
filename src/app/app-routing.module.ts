import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes = [
  // {
  //   path : '',
  //   pathMatch: 'full', redirectTo: '/enter-leave',
  // },
  {
    path : '',
    component : AboutComponent,
    data: {animation: 'HomePage'} 
  },
  {
    path : 'sites',
    component : SitesComponent,
    data: {animation: 'SitesPage'} 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
