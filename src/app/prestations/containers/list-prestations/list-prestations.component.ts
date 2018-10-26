import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  // Par convention les Observable sont suffixés d'un $
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  // private sub: Subscription;
  // Avec private, on pourra accéder à toutes les propriétés public de mon objet
  constructor(
    private ps: PrestationService
    ) { }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
    // Permet de faire une souscriptions
    // this.sub = this.ps.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = ['Type',
    'Client',
    'Nb-jours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'Action',
    'Delete'];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
