import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule'
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule'
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [
    // On ne peut utiliser forRoot(...) qu'une fois dans l'application
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      } // Affiche tout les éléments du router dans la console
    )
  ]
})
export class AppRoutingModule {}
