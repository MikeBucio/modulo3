import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaDesicionComponent } from './teoria-desicion.component';

describe('TeoriaDesicionComponent', () => {
  let component: TeoriaDesicionComponent;
  let fixture: ComponentFixture<TeoriaDesicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaDesicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaDesicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
