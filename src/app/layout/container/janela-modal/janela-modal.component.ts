import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {Modelo_janela} from "./model-janela-modal/modelo_janela";

@Component({
  selector: 'app-janela-modal',
  templateUrl: './janela-modal.component.html',
  styleUrls: ['./janela-modal.component.css']
})
export class JanelaModalComponent implements OnInit{

    closeResult: string;

    @Input() modeloJanela: Modelo_janela;

    @Input() titulo: string = '';
    @Input() icone: string = '';
    @Input() listagemobj: any;

  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
      console.log(this.listagemobj);
  }

  /* Janela modal */
    open(content) {
        console.log(this.listagemobj);
        this.modalService.open(content,{ size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            console.log('saiu')
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

    /* Fim - Janela modal */


}
