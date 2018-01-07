import { Component, OnInit, Input } from '@angular/core';

import { PacienteService } from '../injetores/paciente.service';
import { Paciente } from '../modelos/paciente';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {


  @Input() pacientes: Paciente[];
  sucesso: Boolean = false;
  titulo_modal: string = 'Cadastro de Cliente';
  icone_modal: string = 'fa fa-address-card-o';

  constructor( private pacienteService: PacienteService, private modalService: NgbModal ) { }
    closeResult: string;

  ngOnInit() {
    this.getPacientes();
    
  }

  getPacientes() {
      this.pacienteService.builder('/paciente').
      listarPacientes().subscribe(response => this.pacientes = response );
  }



}
