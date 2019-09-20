import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinesComponent } from './wines/wines.component';
import { WineEditComponent } from './wines/wine-edit/wine-edit.component';
import { WinesListComponent } from './wines/wines-list/wines-list.component';

const routes: Routes = [

    { path: '', redirectTo: '/wine-register-ui', pathMatch: 'full', data: { breadcrumb: 'Wines'}},
    { path: 'wine-register-ui', data: { breadcrumb: 'Wines'},
      children: [
        { path: '', component: WinesListComponent, data: { breadcrumb: 'List'}},
        { path: 'new', component: WineEditComponent, data: { breadcrumb: 'New'}},
        { path: ':id/:mode', component: WineEditComponent, data: { breadcrumb: 'View/Edit'}}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
