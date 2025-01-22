import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { MenuPlatoComponent } from './menuplato/menuplato.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Ruta por defecto
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'provedores', component: ProvedoresComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu2', component: Menu2Component },
  { path: 'menuplato', component: MenuPlatoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
