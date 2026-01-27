import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContratarComponent } from './pages/contratar/contratar.component';
import { PlanesComponent } from './components/planes/planes.component';

export const routes: Routes = [

  // Ruta raíz: muestra Home
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Ruta para planes
  { path: 'planes', component: PlanesComponent },

  // Ruta para contratar
  { path: 'contratar', component: ContratarComponent },

  // Wildcard siempre al final
  { path: '**', redirectTo: '' }, 
];
