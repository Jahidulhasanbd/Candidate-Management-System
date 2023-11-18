import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './components/master-view/master-view.component';
import { MasterComponent } from './components/master/master.component';
import { MasterEditComponent } from './components/master-edit/master-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/masterDetails', pathMatch: 'full' },
  { path: 'masterDetails', component: MasterViewComponent },
  { path: 'masterDetails/Create', component: MasterComponent },
  { path: 'masterDetails/Edit/:id', component: MasterEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
