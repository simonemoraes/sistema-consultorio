import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_URL } from './../api_url';
import { Paciente } from './../modelos/paciente';

import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Promise } from 'q';
import { error } from 'selenium-webdriver';

@Injectable()
export class PacienteService {

    log: any;
    handleError: any;

    private objpaciente: any;
    private httpHeaders: HttpHeaders;
    private pacientesUrl: string;

    constructor(private httpClient: HttpClient) { }

    builder(resource: string) {
        this.pacientesUrl = API_URL + resource;

        return this;
    }

    listarPacientes(): Observable<Paciente[]> {
        return this.httpClient.get<Paciente[]>(this.pacientesUrl);
    }

    /*
    buscaPorId( id: string ): Observable<Paciente>{
        return this.httpClient.get<Paciente>(this.pacientesUrl + id)
    }*/


    save (paciente: Paciente): Observable<Paciente> {
        return this.httpClient.post<Paciente>(this.pacientesUrl, paciente, {});
    }
    
}
