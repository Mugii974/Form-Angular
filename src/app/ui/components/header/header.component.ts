import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'crm-prestation';
  public faBars = faBars;
  public faUser = faUser;
  public open = true;

  constructor() { }

  ngOnInit() {
  }

}
