import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/componentes/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento)  {
    const popover  =  await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // se espera a que se cierre completamente, y despues muestra la infomacion
    ///  * const {data} = await popover.onDidDismiss();

    // * Muestra la informacion en cuanto cierra el popover 
    const { data } = await popover.onWillDismiss();
    console.log('Padre', data);

  }

}
