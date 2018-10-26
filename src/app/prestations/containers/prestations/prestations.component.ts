import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteM } from 'src/app/shared/models/route.model';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {
  public routes: RouteM[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routes = [
      {
        route: 'detail',
        label: 'Détail Prestation'
      },
      {
        route: 'client',
        label: 'Détail Client'
      }
    ];
  }
}
