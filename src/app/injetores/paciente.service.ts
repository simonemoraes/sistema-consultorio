import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Paciente } from '../modelos/paciente';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {_catch} from "rxjs/operator/catch";

@Injectable()
export class PacienteService {

    log: any;
    handleError: any;

    pacientesUrl = 'api/pacientes'; // URL to web api

  constructor( private http: HttpClient ) { }

    getPacientes(): Observable<Paciente[]> {
      return this.http.get<Paciente[]>(this.pacientesUrl)
    }

}
