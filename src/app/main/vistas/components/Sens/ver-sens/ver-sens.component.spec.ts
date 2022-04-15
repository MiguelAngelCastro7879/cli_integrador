import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSensComponent } from './ver-sens.component';

describe('VerSensComponent', () => {
  let component: VerSensComponent;
  let fixture: ComponentFixture<VerSensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
