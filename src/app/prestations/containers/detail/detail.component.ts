import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { BehaviorSubject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public presta$: BehaviorSubject<Prestation>;

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.presta$ = this.ps.presta$;
  }

}
