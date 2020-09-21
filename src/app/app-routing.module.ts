import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'master', component: MasterComponent },
  { path: 'detail', component: DetailComponent},
  { path: '', redirectTo: '/master', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
