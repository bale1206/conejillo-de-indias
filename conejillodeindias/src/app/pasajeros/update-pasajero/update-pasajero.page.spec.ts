import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePasajeroPage } from './update-pasajero.page';

describe('UpdatePasajeroPage', () => {
  let component: UpdatePasajeroPage;
  let fixture: ComponentFixture<UpdatePasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
