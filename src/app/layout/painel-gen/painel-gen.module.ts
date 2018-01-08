import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelGenComponent } from './painel-gen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    exports: [
        PainelGenComponent
    ],
    declarations: [

        PainelGenComponent
    ]
})
export class PainelModule { }
