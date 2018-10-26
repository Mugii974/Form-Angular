import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakeCollection: Prestation[] = [
  new Prestation({
    id: 'azer',
    typePresta : 'Formation',
    client: 'Modis',
    nbJours: 2,
    tjmHt: 500,
  }),
  new Prestation({
    id: 'zaza',
    typePresta : 'Coaching',
    client: 'Urssaf',
    nbJours: 20,
    tjmHt: 1000,
  }),
];
