import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
