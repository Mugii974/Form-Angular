import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrestationsComponent } from './containers/add-prestations/add-prestations.component';
import { DetailClientPrestaComponent } from './containers/detail-client-presta/detail-client-presta.component';
import { DetailComponent } from './containers/detail/detail.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { PrestationResolverService } from './services/prestation-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: PrestationsComponent ,
    children: [
      { path: 'detail', component : DetailComponent },
      { path: 'client', component : DetailClientPrestaComponent },
    ]
  },
  { path: 'add', component: AddPrestationsComponent },
  {
    path: 'edit/:id', component: EditPrestationComponent,
    resolve: { item: PrestationResolverService }
  }
];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule {}
