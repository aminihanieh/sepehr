
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path:  '', redirectTo:'fa/flight/airports' , pathMatch: 'prefix'},
  { path:  'fa/flight/airports', component:  AirportsComponent},
  { path:  'fa/flight/airports/detail/:id', component:  DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
