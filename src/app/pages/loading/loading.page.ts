import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {

    setTimeout(() => {

      this.loading.dismiss();

    }, 1500);

    this.presentLoading();
  }

  async presentLoading() {
  this.loading = await this.loadingCtrl.create({
        message: 'Holla ',
       // duration: 2000
    });
    return this.loading.present();
  }

}