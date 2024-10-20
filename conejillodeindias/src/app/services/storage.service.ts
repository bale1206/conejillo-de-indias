import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private bdd: Storage | null = null; // Inicializa como null
  private bddStatus: Promise<void>;

  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }

  private async onInit(): Promise<void> {
    try {
      this.bdd = await this.storage.create(); // Crea la instancia de almacenamiento
    } catch (error) {
      console.error('Error al inicializar el almacenamiento', error);
      throw error; // Propaga el error
    }
  }

  private async BDDConectada(): Promise<void> {
    await this.bddStatus; // Espera a que se complete la inicialización
    if (!this.bdd) {
      throw new Error('La base de datos no está conectada');
    }
  }

  async get(key: string): Promise<any> {
    await this.BDDConectada();
    return this.bdd?.get(key); // Uso de optional chaining para evitar errores
  }

  async set(key: string, valor: any): Promise<any> {
    await this.BDDConectada();
    return this.bdd?.set(key, valor);
  }

  async remove(key: string): Promise<void> {
    await this.BDDConectada();
    return this.bdd?.remove(key); // También uso de optional chaining
  }
}
