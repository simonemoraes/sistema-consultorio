import {Component, OnInit } from '@angular/core';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paciente-new',
  templateUrl: './paciente-new.component.html',
  styleUrls: ['./paciente-new.component.css']
})
export class PacienteNewComponent implements OnInit {

    closeResult: string;

    constructor( private modalService: NgbModal ) { }

    ngOnInit() {
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
