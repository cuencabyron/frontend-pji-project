import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContratarComponent } from './pages/contratar/contratar.component';
import { PlanesComponent } from './components/planes/planes.component';
import { CotizadorComponent } from './pages/cotizador/cotizador.componet';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contratar', component: ContratarComponent },
  { path: '', component: PlanesComponent },
  { path: 'cotizador', component: CotizadorComponent },
  { path: '**', redirectTo: '' } // redirige cualquier ruta desconocida al Home
];
