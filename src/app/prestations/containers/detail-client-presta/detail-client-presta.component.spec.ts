import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientPrestaComponent } from './detail-client-presta.component';

describe('DetailClientPrestaComponent', () => {
  let component: DetailClientPrestaComponent;
  let fixture: ComponentFixture<DetailClientPrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClientPrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
