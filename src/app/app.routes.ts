import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContratarComponent } from './pages/contratar/contratar.component';
import { PlanesComponent } from './components/planes/planes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'planes', component: PlanesComponent },

  // Wizard dentro de /contratar/...
  {
    path: 'contratar',
    component: ContratarComponent,
    children: [
      {
        path: 'registro-basico',
        loadComponent: () =>
          import('./pages/contratar/registro-basico/registro-basico.component')
            .then(m => m.RegistroBasicoComponent),
      },
      {
        path: 'estado-plan',
        loadComponent: () =>
          import('./pages/contratar/estado-plan/estado-plan.component')
            .then(m => m.EstadoPlanComponent),
      },
      {
        path: 'pago',
        loadComponent: () =>
          import('./pages/contratar/pago/pago.component')
            .then(m => m.PagoComponent),
      },

      // si entran a /contratar sin nada
      { path: '', redirectTo: 'registro-basico', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '' },
];