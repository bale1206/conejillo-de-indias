import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private bdd: Storage | null = null; 
  private bddStatus: Promise<void>;

  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }

  private async onInit(): Promise<void> {
    try {
      this.bdd = await this.storage.create(); 
    } catch (error) {
      console.error('Error al inicializar el almacenamiento', error);
      throw error; 
    }
  }

  private async BDDConectada(): Promise<void> {
    await this.bddStatus; 
    if (!this.bdd) {
      throw new Error('La base de datos no está conectada');
    }
  }

  async get(key: string): Promise<any> {
    await this.BDDConectada();
    return this.bdd?.get(key); 
  }

  async set(key: string, valor: any): Promise<any> {
    await this.BDDConectada();
    return this.bdd?.set(key, valor);
  }

  async remove(key: string): Promise<void> {
    await this.BDDConectada();
    return this.bdd?.remove(key); 
  }
}
