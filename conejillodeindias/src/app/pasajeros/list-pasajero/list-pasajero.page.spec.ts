import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPasajeroPage } from './list-pasajero.page';

describe('ListPasajeroPage', () => {
  let component: ListPasajeroPage;
  let fixture: ComponentFixture<ListPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
