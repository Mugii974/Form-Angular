import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collectionCli$: Observable<Client[]>;
  public headers = ['Nom',
  'Adresse',
  'Code Postal',
  'Ville',
  'Tjm HT',
  'Etat Client',
  'Delete'
  ];

  constructor(
    private ps: ClientService
  ) { }

  ngOnInit() {
    this.collectionCli$ = this.ps.collection$;
  }

}
