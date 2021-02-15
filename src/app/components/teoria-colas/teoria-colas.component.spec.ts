import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaColasComponent } from './teoria-colas.component';

describe('TeoriaColasComponent', () => {
  let component: TeoriaColasComponent;
  let fixture: ComponentFixture<TeoriaColasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaColasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaColasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
