import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaModalComponent } from './janela-modal.component';

describe('JanelaModalComponent', () => {
  let component: JanelaModalComponent;
  let fixture: ComponentFixture<JanelaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanelaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
