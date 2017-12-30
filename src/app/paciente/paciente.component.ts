import { Component, OnInit, Input } from '@angular/core';

import { PacienteService } from '../injetores/paciente.service';
import { Paciente } from '../modelos/paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[];
  sucesso: Boolean = false;

  constructor( private pacienteService: PacienteService) { }


  ngOnInit() {
    this.getPacientes();
  }

  getPacientes() {
      this.pacienteService.listarPacientes();
  }
}
