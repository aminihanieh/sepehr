import {
  NgModule,
  Component
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AirportsComponent
} from './airports/airports.component';
import {
  DetailComponent
} from './detail/detail.component';
import {
  TerminalsComponent
} from './terminals/terminals.component';
import { Terminals } from './models/terminals.model';


// const routes: Routes = [{ path:  '', redirectTo:'fa/flight/airports' , pathMatch: 'prefix'},
//   {
//     path: 'fa/flight/',
//     children: [
//       {
//         path: 'airports/اطلاعات-پرواز-فرودگاه',
//         component: AirportsComponent
//       },
//           {
//             path: 'airports/:iataCode',
//             component: DetailComponent
//           },
         
//           {
//             path: 'terminal/:iataCode',
//             component: TerminalsComponent
//           }
//         ]
               
//       }
//     ]

const routes: Routes = [
  { path:  '', redirectTo:'fa/flight/airports/اطلاعات-پرواز-فرودگاه' , pathMatch: 'full'},
  { path:  'fa/flight', children:[
    { path:  'airports/اطلاعات-پرواز-فرودگاه', component:  AirportsComponent},
    { path:  'airports/:iataCode', component:  DetailComponent },
  { path:  'terminals/:iataCode', component:  TerminalsComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
