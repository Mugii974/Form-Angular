import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public states = Object.values(ClientState);
  public faTrash = faTrash;
  @Input() item: Client;

  constructor(
    private ps: ClientService
  ) { }

  ngOnInit() {
  }

  public changeState(event): void {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      this.item.state = state;
    });
  }

  public delete() {
    this.ps.delete(this.item).then((data) => {
      // traiter réponses serveur
    });
  }

}
