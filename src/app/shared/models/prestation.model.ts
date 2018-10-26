import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 0;
  tauxTva = 20;
  state = State.OPTION;

  // Partial permet de passer un objet qui répond partiellement à la classe Prestation
  constructor(fields?: Partial<Prestation>) {
    Object.assign(this, fields);
  }

  totalHT() {
    // console.log('total HT callled');
    return this.tjmHt * this.nbJours;
  }

  // La tva? est un param optionnel
  totalTTC(tva?) {
    // console.log('total TTC called');

    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT() * (1 + tva / 100);
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
