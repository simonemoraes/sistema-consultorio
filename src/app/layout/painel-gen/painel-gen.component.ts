import {Component, Input, OnInit} from '@angular/core';
import {Painel_} from "./model-painel/painel_";

@Component({
  selector: 'app-painel-gen',
  templateUrl: './painel-gen.component.html',
  styleUrls: ['./painel-gen.component.css']
})
export class PainelGenComponent implements OnInit {

 @Input() painel: Painel_;


  constructor() { }

  ngOnInit() {
  }

}
