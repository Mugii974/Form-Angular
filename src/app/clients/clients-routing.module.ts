import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';
import { AddClientsComponent } from './containers/add-clients/add-clients.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'add', component: AddClientsComponent }
];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
