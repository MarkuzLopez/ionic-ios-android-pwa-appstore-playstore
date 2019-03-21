import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componentes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  /// esto le dice a typeScript  que ese componente es un observable que responde un arreglo de componente 
   componentes: Observable<Componentes []>;

  constructor(private datServices: DataService) { }

  ngOnInit() {
    this.componentes =  this.datServices.getMenuOpts();
  }

}
