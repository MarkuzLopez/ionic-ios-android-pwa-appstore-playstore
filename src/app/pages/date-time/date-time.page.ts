import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date =  new Date();
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: (evento) => {
          console.log('Clicked Guardar');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
            console.log('Clicked Log. Do not Dismiss. ');
        }
      } ]
    };
  }

  cambioFecha(fecha) {
    console.log(fecha);
    console.log('Date', new Date(fecha.detail.value));
  }

}
