import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteNewComponent } from './paciente/paciente-new/paciente-new.component';
import { TesteParametroComponent } from './teste-parametro/teste-parametro.component';
import {JanelaModalComponent} from './janela-modal/janela-modal.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'paciente', component: PacienteComponent},
    { path: 'paciente/novo', component: PacienteNewComponent},
    { path: 'janelaModal', component: JanelaModalComponent},
    { path: 'teste/:id', component: TesteParametroComponent},
];

/* O ModuleProviders é onde estão todas as definições e configurações das nossas funcionalidades da nossa aplicação */
export const routing: ModuleWithProviders = RouterModule.forRoot( routes );

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
