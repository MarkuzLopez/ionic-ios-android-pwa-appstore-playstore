import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  /// * para acceder a un atributo de html, por nedio del tag con viwelchild
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(evento: any) {
    console.log(evento);

    // * Se cancelara el infinite cuando llegue a los 60 la lista
    if ( this.data.length > 50) {
        evento.target.complete();

        // ! Para desabilitar el infiniteScroll, y no deje el margen de pixeles een el inferior del dispositivo
        this.infiniteScroll.disabled =  true;
        return;
    }

    setTimeout(() => {
      const nuevoArr =  Array(20);
      this.data.push( ...nuevoArr);
      evento.target.complete(); /// para continuar con el arreglo
    }, 1000);
  }

}
