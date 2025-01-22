// categorias.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: { nombre: string; imagen: string }[] = [
    { nombre: 'Entradas', imagen: 'assets/entradas.png' },
    { nombre: 'Postres', imagen: 'assets/postre.jpeg' },
    { nombre: 'Platos fuertes', imagen: 'assets/platosfuertes.jpg' },
    { nombre: 'Aperitivos', imagen: 'assets/aperitivos.jpg' },
  ];

  getCategorias() {
    return this.categorias;
  }

  addCategoria(categoria: { nombre: string; imagen: string }) {
    this.categorias.push(categoria); // Agregar la nueva categoría al arreglo
  }
}
