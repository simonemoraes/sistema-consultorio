import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PacienteService } from '../resourse/paciente.service';
import { Paciente } from '../model/paciente';

@Component({
  selector: 'app-paciente-new',
  templateUrl: './paciente-new.component.html',
  styleUrls: ['./paciente-new.component.css']
})
export class PacienteNewComponent implements OnInit {

    public paciente = new Paciente(); /* Instanciando um objeto do tipo Paciente */

    @Input() listapacientes: Paciente[];

    constructor( private pacienteService: PacienteService ) { }

    ngOnInit() {}
	
	save(e){
        e.preventDefault();

        this.pacienteService.builder('/paciente')
        .save(this.paciente)
        .subscribe(response =>
            {
                if(response.id > 0){

                    this.paciente = response
                    this.listapacientes.push(this.paciente);
                    this.paciente = new Paciente()
                }          
            }
        )
        
    }




}
