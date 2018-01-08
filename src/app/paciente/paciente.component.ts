import { Component, OnInit, Input } from '@angular/core';

import { PacienteService } from './resourse/paciente.service';
import { Paciente } from './model/paciente';
import {Painel_} from '../layout/painel-gen/model-painel/painel_';
import {Modelo_janela} from '../layout/container/janela-modal/model-janela-modal/modelo_janela';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

    // Modelo Janela
  modeloJanela: Modelo_janela = new Modelo_janela();

  public painel: Painel_ = new Painel_(
      'Paciente',
      'card border-primary',
      'card-header bg-primary',
      'card-title text-white font-weight-normal',
      'fa fa-users'
  );
  @Input() pacientes: Paciente[];

  constructor( private pacienteService: PacienteService ) {
      this.setPropJanelaModal();
  }

    ngOnInit() {
    this.getPacientes();
    
  }

  getPacientes() {
      this.pacienteService.builder('/paciente').
      listarPacientes().subscribe(response => this.pacientes = response );
  }

    private setPropJanelaModal() {
        this.modeloJanela.titulo = 'Cadastro de Cliente';
        this.modeloJanela.icone = 'fa fa-address-card-o';
        this.modeloJanela.colorTitleModal = 'modal-title text-white';
        this.modeloJanela.headerModal = 'modal-header bg-primary header_modal';
    }



}
