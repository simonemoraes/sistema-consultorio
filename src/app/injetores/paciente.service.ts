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

    salvarPaciente(paciente){

        console.log("Paciente Service");
        console.log(paciente);
    }


    /*

       getHero(id: number): Promise<Hero> {
       const url = `${this.heroesUrl}/${id}`;
       return this.http.get(url)
           .toPromise()
           .then(response => response.json().data as Hero)
           .catch(this.handleError);
   }


   update(hero: Hero): Promise<Hero> {
       const url = `${this.heroesUrl}/${hero.id}`;
       return this.http
           .put(url, JSON.stringify(hero), {headers: this.headers})
           .toPromise()
           .then(() => hero)
           .catch(this.handleError);
   }

   create(name: string): Promise<Hero> {
       return this.http
           .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
           .toPromise()
           .then(res => res.json().data as Hero)
           .catch(this.handleError);
   }

   delete(id: number): Promise<void> {
       const url = `${this.heroesUrl}/${id}`;
       return this.http.delete(url, {headers: this.headers})
           .toPromise()
           .then(() => null)
           .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
       return Promise.reject(error.message || error);
   }

   */

}
