import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ClientService } from 'src/app/clients/services/client.service';

@Injectable({
  providedIn: 'root'
})

export class PrestationService {
  // On utilise les getters/setters fournis par JS, il faut prefixer d'un _
  // JS reconnait l'utilisation du getters / setters automatiquement
  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // Convention de nommage Observable avec le $
  public presta$ = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
    private cs: ClientService
  ) {
    // this.collection = fakeCollection;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    // Récupération des données depuis la bdd
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map(data => data.map(presta => new Prestation(presta)))
      map((data) => {
        this.presta$.next(new Prestation(data[0]));
        console.log(this.presta$.value);
        return data.map((presta) => {
          return new Prestation(presta);
        });
      })
    );
    // Appel HTTP (sans firebase), on récupère un Observable
    // this.collection$ = this.http.get<Prestation[]>('url-api/prestations').pipe(
    //   map(data => data.map(presta => new Prestation(presta)))
    // );
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }
  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }
  /*
  // update item in collection
  public update(item: Prestation, state: State): void {
    item.state = state;
    console.log(item.state);

  }

  // add item in collection
  public add(item: Prestation): void {
    // Push permet d'ajouter une donnée à la fin du tableau (n'existe pas sur un Observable)
    // this.collection.push(new Prestation(item));

  }
  */

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    // les ... sont des spreads operators qui permettent de décomposer un objet (tout les attributs avec leurs valeurs)
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
