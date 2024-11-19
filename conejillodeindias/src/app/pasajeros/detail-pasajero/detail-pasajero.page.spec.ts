import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPasajeroPage } from './detail-pasajero.page';

describe('DetailPasajeroPage', () => {
  let component: DetailPasajeroPage;
  let fixture: ComponentFixture<DetailPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
