import { Paciente } from './../modelos/paciente';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Http, Headers} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {_catch} from "rxjs/operator/catch";
import { Promise } from 'q';
import { catchError } from 'rxjs/operators/catchError';
import { error } from 'selenium-webdriver';

@Injectable()
export class PacienteService {

    log: any;
    handleError: any;

    private objpaciente: any;
    private httpHeaders: HttpHeaders;

    private pacientesUrl: string; 

  constructor( private httpClient: HttpClient ) { }

  builder( resource: string ){
    this.pacientesUrl = 'api/' + resource; // URL to web api
    return this;
}
  

    getPacientes(): Observable<Paciente[]> {
      return this.httpClient.get<Paciente[]>(this.pacientesUrl);
    }

    insert (data: Object) {
        return this.httpClient.post(this.pacientesUrl, data, {headers: this.httpHeaders})
            .toPromise()
            .then((res) => {
                return console.log('Pasoou');
            });
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
