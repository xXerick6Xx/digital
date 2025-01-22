import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
  nuevaCategoria: { nombre: string; estado: string; descripcion: string; tipo_categoria: string; imagen: string } = {
    nombre: '',
    estado: '',
    descripcion: '',
    tipo_categoria: '',
    imagen: ''
  };

  // Flag para mostrar la notificación
  mostrarNotificacion: boolean = false;

  constructor(private categoriasService: CategoriasService, private router: Router) {}

  guardarCategoria() {
    if (this.nuevaCategoria.nombre && this.nuevaCategoria.estado && this.nuevaCategoria.descripcion && this.nuevaCategoria.tipo_categoria && this.nuevaCategoria.imagen) {
      // Agregar la nueva categoría al servicio
      this.categoriasService.addCategoria(this.nuevaCategoria);

      // Mostrar la notificación
      this.mostrarNotificacion = true;

      // Redirigir a la vista de menús después de un pequeño retraso
      setTimeout(() => {
        this.router.navigate(['/admin/menu']);
      }, 2000); // 2 segundos de retraso para que la notificación se vea

    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.nuevaCategoria.imagen = URL.createObjectURL(file); // Asignar la imagen seleccionada
    }
  }
}
