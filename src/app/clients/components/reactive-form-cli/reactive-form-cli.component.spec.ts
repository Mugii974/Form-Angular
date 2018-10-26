import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCliComponent } from './reactive-form-cli.component';

describe('ReactiveFormCliComponent', () => {
  let component: ReactiveFormCliComponent;
  let fixture: ComponentFixture<ReactiveFormCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
