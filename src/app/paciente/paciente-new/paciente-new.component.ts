import { Paciente } from './../../modelos/paciente';
import {Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { PacienteService } from '../../injetores/paciente.service';

@Component({
  selector: 'app-paciente-new',
  templateUrl: './paciente-new.component.html',
  styleUrls: ['./paciente-new.component.css']
})
export class PacienteNewComponent implements OnInit {

    closeResult: string;
    public pacientes: Paciente[] = [];

    constructor( private modalService: NgbModal, private pacienteService: PacienteService, private router: Router ) { }

    ngOnInit() {
    }
	/*
	add(e){
        e.preventDefault();

        this.pacienteService.builder('pacientes')
        .insert(this.pacientes)
        .then(res => {
            this.router.navigate(['/paciente']);
        })
        
    }


*/

    /* Janela modal de cadastro de Pacientes */
    open(content) {
        this.modalService.open(content, { size: 'sm'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    /* Fim - Janela modal de cadastro de Pacientes */
}
