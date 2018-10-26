import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  constructor(
    private ps: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Client): void {
    this.ps.add(item).then((data) => {
      // Route en absolue
      this.router.navigate(['clients']);
    });
  }

}
