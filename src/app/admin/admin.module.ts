import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { Menu2Component } from './menu2/menu2.component';
import { MenuComponent } from './menu/menu.component';
import { NotificacionComponent } from './notificacion/notificacion.component'; // Importa el componente de notificación

@NgModule({
  declarations: [
    MenuComponent,
    Menu2Component,
    NotificacionComponent,  // Declara el componente de notificación aquí
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
