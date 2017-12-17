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
	
	add(e){
        e.preventDefault();

        this.pacienteService.builder('pacientes')
        .insert(this.pacientes)
        .then(res => {
            this.router.navigate(['/paciente']);
        })
        
    }

    /*
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
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
