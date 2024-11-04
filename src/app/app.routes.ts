import { Routes } from '@angular/router';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {
        path:'',
        component:RegistroComponent,
        title:"Pagina de inicio"
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
