import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuaSensComponent } from './actua-sens.component';

describe('ActuaSensComponent', () => {
  let component: ActuaSensComponent;
  let fixture: ComponentFixture<ActuaSensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuaSensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuaSensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
