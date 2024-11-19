import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPasajeroPage } from './add-pasajero.page';

describe('AddPasajeroPage', () => {
  let component: AddPasajeroPage;
  let fixture: ComponentFixture<AddPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
