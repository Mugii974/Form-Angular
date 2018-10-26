import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  public faTrash = faTrash;
  public faEdit = faEdit;

  @Input() item: Prestation;
  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event): void {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      this.item.state = state;
    });

    // this.ps.update(this.item, state).subscribe((data) => {
    //   // if data ... traiter réponses de l'API
    //   this.item.state = state;
    // });
  }

  public delete() {
    this.ps.delete(this.item).then((data) => {
      // traiter réponses serveur
    });

    // this.ps.delete(this.item).subscribe((data) => {
    //   // if data...traiter réponses de l'API
    // });
  }

  public edit() {
    this.router.navigate(['prestations/edit', this.item.id]);
  }

  public detail() {
    this.ps.presta$.next(this.item);
  }
}
