import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';

export class Client implements ClientI {
  id: string;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  tjm_ht = 0;
  state = ClientState.ACTIF;

  // Partial permet de passer un objet qui répond partiellement à la classe Client
  constructor(fields?: Partial<Client>) {
    Object.assign(this, fields);
  }

}
