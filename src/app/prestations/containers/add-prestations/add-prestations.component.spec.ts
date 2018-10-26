import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrestationsComponent } from './add-prestations.component';

describe('AddPrestationsComponent', () => {
  let component: AddPrestationsComponent;
  let fixture: ComponentFixture<AddPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
