import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
