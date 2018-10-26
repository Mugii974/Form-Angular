import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AjoutComponent } from './components/ajout/ajout.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplateAComponent } from './templates/template-a/template-a.component';
import { TemplateBComponent } from './templates/template-b/template-b.component';
import { TemplateCComponent } from './templates/template-c/template-c.component';
import { TemplateDComponent } from './templates/template-d/template-d.component';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TotalPipe, TableauComponent,
    StateDirective, AjoutComponent,
    TableauLightComponent, TemplateAComponent,
    TemplateBComponent,
    TemplateCComponent,
    TemplateDComponent,
    NavTabComponent],
  exports: [TotalPipe,
    TableauComponent,
    AjoutComponent,
    TableauLightComponent,
    TemplateAComponent,
    TemplateBComponent,
    TemplateCComponent,
    TemplateDComponent,
    StateDirective,
    NavTabComponent]
})
export class SharedModule { }
