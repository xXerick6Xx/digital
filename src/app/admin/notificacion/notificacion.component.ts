import { Component } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent {
  show: boolean = false;

  mostrarNotificacion() {
    this.show = true;
    setTimeout(() => this.show = false, 3000); // Cierra la notificación después de 3 segundos
  }
}
