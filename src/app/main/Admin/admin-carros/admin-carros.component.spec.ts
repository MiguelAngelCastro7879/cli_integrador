import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarrosComponent } from './admin-carros.component';

describe('AdminCarrosComponent', () => {
  let component: AdminCarrosComponent;
  let fixture: ComponentFixture<AdminCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
