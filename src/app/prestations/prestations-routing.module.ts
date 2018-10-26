import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { AddPrestationsComponent } from './containers/add-prestations/add-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PrestationsComponent },
  { path: 'add', component: AddPrestationsComponent }
];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule {}
