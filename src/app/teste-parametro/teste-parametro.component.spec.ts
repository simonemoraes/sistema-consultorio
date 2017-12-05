import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteParametroComponent } from './teste-parametro.component';

describe('TesteParametroComponent', () => {
  let component: TesteParametroComponent;
  let fixture: ComponentFixture<TesteParametroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteParametroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
