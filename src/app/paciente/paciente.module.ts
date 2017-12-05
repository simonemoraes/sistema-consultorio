import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routing } from '../app-routing.module';
import { PacienteNewComponent } from './paciente-new/paciente-new.component';
import { JanelaModalComponent } from '../janela-modal/janela-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [PacienteComponent, PacienteNewComponent, JanelaModalComponent],
    exports: [],
})
export class PacienteModule { }
