import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-border',
  templateUrl: './list-border.page.html',
  styleUrls: ['./list-border.page.scss'],
})
export class ListBorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(evento) {
    console.log(evento);
    evento.detail.complete();

    // obtiene el indice del arreglo en la posiocon que se selcione,, y que solo selecione uno 
    const itemMover = this.personajes.splice(evento.detail.from, 1) [0];
    console.log(itemMover);
    // agrega el nuevo elemento, que se mueve para acomodarlo hacia to. en el evento
    this.personajes.splice(evento.detail.to, 0, itemMover);
  }

  onClick() {
    console.log(this.personajes);
  }

}
