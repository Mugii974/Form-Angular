import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AddPrestationsComponent } from './containers/add-prestations/add-prestations.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrestationsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent, AddPrestationsComponent, FormPrestationComponent, ReactiveFormComponent],
  exports: [PrestationsComponent]
})
export class PrestationsModule { }
