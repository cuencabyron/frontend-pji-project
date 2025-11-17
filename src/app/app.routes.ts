import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContratarComponent } from './pages/contratar/contratar.component';
import { PlanesComponent } from './components/planes/planes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contratar', component: ContratarComponent },
  { path: '', component: PlanesComponent },
  { path: '**', redirectTo: '' } // redirige cualquier ruta desconocida al Home
];
