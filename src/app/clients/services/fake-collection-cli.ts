import { Client } from 'src/app/shared/models/client.model';

export const fakeCollectionCli: Client[] = [
  new Client({
    id: 'sasa',
    nom: 'Toto',
    adresse: '2 rue tourte',
    codePostal: 31000,
    ville: 'Toulouse',
    tjm_ht: 850,
  }),
  new Client({
    id: 'saza',
    nom: 'Tata',
    adresse: '5 av Chartres',
    codePostal: 45612,
    ville: 'City',
    tjm_ht: 650,
  }),
];
