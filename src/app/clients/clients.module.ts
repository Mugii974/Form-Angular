import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ReactiveFormCliComponent } from './components/reactive-form-cli/reactive-form-cli.component';
import { AddClientsComponent } from './containers/add-clients/add-clients.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ClientsComponent, ListClientsComponent, ClientComponent, AddClientsComponent, ReactiveFormCliComponent],
  exports: [ClientsComponent]
})
export class ClientsModule { }
