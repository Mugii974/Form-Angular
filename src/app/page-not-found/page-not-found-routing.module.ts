import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [{ path: '', component: PageNotFoundComponent }];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(appRoutes)
  ]
})
export class PageNotFoundRoutingModule {}
