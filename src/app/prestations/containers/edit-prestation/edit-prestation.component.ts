import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationResolverService } from '../../services/prestation-resolver.service';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  public presta: Prestation;

  constructor(
    private acr: ActivatedRoute,
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.acr.data.subscribe((data: {item: Prestation}) => {
      console.log(data.item);
      this.presta = data.item;
    });
  }

  public update(item: Prestation) {
    item.id = this.presta.id;
    this.ps.update(item).then((data) => {
      this.router.navigate(['prestations']);
    })  ;
  }

}
