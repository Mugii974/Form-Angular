import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestations',
  templateUrl: './add-prestations.component.html',
  styleUrls: ['./add-prestations.component.scss']
})
export class AddPrestationsComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation): void {
    // On récupère une promise
    this.ps.add(item).then((data) => {
      // Route en absolue
      this.router.navigate(['prestations']);
    });

    // this.ps.add(item).subscribe((data) => {
    //   // if data .....
    //   this.router.navigate(['prestations']);
    // });
  }

}
