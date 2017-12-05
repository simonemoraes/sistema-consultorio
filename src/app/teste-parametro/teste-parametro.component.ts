import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-teste-parametro',
  templateUrl: './teste-parametro.component.html',
  styleUrls: ['./teste-parametro.component.css']
})
export class TesteParametroComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor( private route: ActivatedRoute ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
        }
    );
  }
  ngOnDestry() {
    this.inscricao.unsubscribe();
  }

}
