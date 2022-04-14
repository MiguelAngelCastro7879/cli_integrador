import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSensComponent } from './vista-sens.component';

describe('VistaSensComponent', () => {
  let component: VistaSensComponent;
  let fixture: ComponentFixture<VistaSensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
