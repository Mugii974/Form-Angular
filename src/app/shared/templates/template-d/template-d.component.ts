import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-d',
  templateUrl: './template-d.component.html',
  styleUrls: ['./template-d.component.scss']
})
export class TemplateDComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
