import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { Empleados} from './features/empleados/empleados';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'empleados', component: Empleados }
    ]
  },
  { path: '**', redirectTo: 'login' }
];