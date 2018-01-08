import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../../api_url';
import { Paciente } from '../model/paciente';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PacienteService {

    private pacientesUrl: string;

    constructor(private httpClient: HttpClient) { }

    builder(resource: string) {
        this.pacientesUrl = API_URL + resource;

        return this;
    }

    listarPacientes(): Observable<Paciente[]> {
        return this.httpClient.get<Paciente[]>(this.pacientesUrl);
    }

    save (paciente: Paciente): Observable<Paciente> {
        return this.httpClient.post<Paciente>(this.pacientesUrl, paciente, {});
    }
    
}
