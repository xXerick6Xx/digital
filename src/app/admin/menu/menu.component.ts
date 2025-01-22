// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  categorias: { nombre: string; imagen: string }[] = [];

  constructor(private router: Router, private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categorias = this.categoriasService.getCategorias(); // Obtener las categorías del servicio
  }

  goToMenu2() {
    this.router.navigate(['/admin/menu2']);
  }
  goToMenuPlato(categoria: { nombre: string }) {
    // Redirige a la ruta menuplato y pasa el nombre de la categoría como parámetro
    this.router.navigate(['/admin/menuplato'], { queryParams: { categoria: categoria.nombre } });
  }
}
