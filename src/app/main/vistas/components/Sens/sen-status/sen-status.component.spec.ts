import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenStatusComponent } from './sen-status.component';

describe('SenStatusComponent', () => {
  let component: SenStatusComponent;
  let fixture: ComponentFixture<SenStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
