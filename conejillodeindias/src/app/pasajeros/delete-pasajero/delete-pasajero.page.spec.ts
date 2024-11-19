import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePasajeroPage } from './delete-pasajero.page';

describe('DeletePasajeroPage', () => {
  let component: DeletePasajeroPage;
  let fixture: ComponentFixture<DeletePasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
