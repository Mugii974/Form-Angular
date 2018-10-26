import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection$: Observable<Client[]>;
  private itemsCollection: AngularFirestoreCollection<Client>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Client>('clients');
    // Récupération des données depuis la bdd
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => data.map(cli => new Client(cli)))
    );
  }

  // get collection
  get collection$(): Observable<Client[]> {
    return this._collection$;
  }
  // set collection
  set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  // add client
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
  }

  // update item
  update(item: Client, state?: ClientState): Promise<any> {
    const cli  = {...item};
    if (state) {
      cli.state = state;
    }
    return this.itemsCollection.doc(item.id).update(cli).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
  }
}
