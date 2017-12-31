import { Paciente } from './../modelos/paciente';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Http, Headers} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { _catch } from 'rxjs/operator/catch';
import { Promise } from 'q';
// import { catchError } from 'rxjs/operators/catchError';
import { error } from 'selenium-webdriver';

@Injectable()
export class PacienteService {

    log: any;
    handleError: any;

    private objpaciente: any;
    private httpHeaders: HttpHeaders;
    private url: String = 'http://localhost:8000/api';
    private pacientesUrl: string;

    constructor(private httpClient: HttpClient) { }

    builder(resource: string) {
        this.pacientesUrl = this.url + resource; // URL to web api
        // console.log(this.pacientesUrl);
        return this;
    }

    listarPacientes(): Observable<Paciente[]> {
        return this.httpClient.get<Paciente[]>(this.url+'/paciente')
    }

    /*
    insert (data: Object) {
        return this.httpClient.post(this.pacientesUrl, data, {headers: this.httpHeaders})
            .toPromise()
            .then((res) => {
                return console.log('Pasoou');
            });
    }
    */
}
