import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContratarComponent } from './pages/contratar/contratar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contratar', component: ContratarComponent },
  { path: '**', redirectTo: '' } // redirige cualquier ruta desconocida al Home
];
