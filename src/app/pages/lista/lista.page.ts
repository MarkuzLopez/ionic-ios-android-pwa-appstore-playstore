import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  // * Usa la referencia lista que se ecnuentrea en el html, y por medio de viewchild se obtiene la propiedad
  // * de tipo IonLuist pasra obtener la ayuda de typeScript (tslint)
  @ViewChild('lista') lista: IonList;

  // users: any [] = [];

  usuarios: Observable<any>;

  constructor(public dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
  this.usuarios = this.dataService.getUsers();
    // this.dataService.getUsers()
    // .subscribe( (res: []) => {
    //   this.users = res;
    //   console.log();
    // });
  }

  /// para toasCrtrllr
  async presentToast(message: string, color: string) {

    const toast =  await this.toastCtrl.create({
        message,
        duration: 2000,
        color
    });

    toast.present();
  }

  favorite(user) {
    console.log('favorite', user);
    this.presentToast('Guardado Favoritos', 'success');
    // el siguiente metodo sirve para cerrar el sliding una vez que se selecione uno
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    this.presentToast('Borrado Exitosamente', 'danger');
    console.log('borrar', user);
  }

  share(user) {

    console.log('share', user);
    this.presentToast('Compartido', 'warning');
    this.lista.closeSlidingItems();

  }

}
