import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVistaComponent } from './crear-vista.component';

describe('CrearVistaComponent', () => {
  let component: CrearVistaComponent;
  let fixture: ComponentFixture<CrearVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
