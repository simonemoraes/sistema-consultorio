import {Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Paciente } from '../../modelos/paciente';

@Component({
  selector: 'app-paciente-new',
  templateUrl: './paciente-new.component.html',
  styleUrls: ['./paciente-new.component.css']
})
export class PacienteNewComponent implements OnInit {

    closeResult: string;
    public pacientes: Paciente[] = [];

    constructor( private modalService: NgbModal ) { }

    ngOnInit() {
    }
	
	onSubmit(formulario){
	  console.log(formulario);
	  console.log(this.pacientes);
    }

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
