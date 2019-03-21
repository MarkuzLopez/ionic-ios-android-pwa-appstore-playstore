import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componentes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componentes []>;

  constructor(private menuCtrl: MenuController, private datServices: DataService) { }

  ngOnInit() {
    this.componentes =  this.datServices.getMenuOpts();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}


