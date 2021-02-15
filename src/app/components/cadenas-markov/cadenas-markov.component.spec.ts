import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenasMarkovComponent } from './cadenas-markov.component';

describe('CadenasMarkovComponent', () => {
  let component: CadenasMarkovComponent;
  let fixture: ComponentFixture<CadenasMarkovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadenasMarkovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenasMarkovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
