import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacienteComponent } from './paciente.component';
import { JanelaModalComponent } from '../layout/container/janela-modal/janela-modal.component';
import { PacienteNewComponent } from './paciente-new/paciente-new.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PacienteDeleteComponent } from './paciente-delete/paciente-delete.component';
import { PainelModule } from '../layout/painel-gen/painel-gen.module';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PainelModule,
        AppRoutingModule
    ],
    declarations: [
        PacienteComponent,
        PacienteNewComponent,
        JanelaModalComponent,
        PacienteEditComponent,
        PacienteViewComponent,
        PacienteDeleteComponent
    ],
    exports: [],
})
export class PacienteModule { }
