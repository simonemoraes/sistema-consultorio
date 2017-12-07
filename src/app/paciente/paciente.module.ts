import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routing } from '../app-routing.module';
import { PacienteNewComponent } from './paciente-new/paciente-new.component';
import { JanelaModalComponent } from '../janela-modal/janela-modal.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PacienteDeleteComponent } from './paciente-delete/paciente-delete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [PacienteComponent, PacienteNewComponent, JanelaModalComponent, PacienteEditComponent, PacienteViewComponent, PacienteDeleteComponent],
    exports: [],
})
export class PacienteModule { }
