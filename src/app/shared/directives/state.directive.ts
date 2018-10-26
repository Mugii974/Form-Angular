import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  // Permet d'ajouter une class="nomClass" dans le host
  @HostBinding('class') nomClass: string;

  constructor() {

  }
  // Ne détecte un changement seulement sur type primitif
  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State): string {
    // Les `` permettent la concaténation directement avec du JS
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
  // remove all accent of appState (ex : annulé => state-annule)
  // remove all spaces
  // concat state- with result
  // bind result with property class of host td

}
