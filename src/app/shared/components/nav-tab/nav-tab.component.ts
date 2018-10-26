import { Component, OnInit, Input } from '@angular/core';
import { RouteM } from '../../models/route.model';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {
  @Input() routes: RouteM[];

  constructor() { }

  ngOnInit() {
  }

}
