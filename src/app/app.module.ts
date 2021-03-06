import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TesteParametroComponent } from './teste-parametro/teste-parametro.component';

import {PacienteModule} from './paciente/paciente.module';

import { PacienteService } from './paciente/resourse/paciente.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        LoginComponent,
        TesteParametroComponent,
        //PainelGenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        routing,
        PacienteModule,
        AngularFontAwesomeModule,
        HttpClientModule,
       
    ],
    providers: [ PacienteService ],
    bootstrap: [AppComponent]
})
export class AppModule { }