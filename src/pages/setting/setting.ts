import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  perHour : number = 12
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  savePerHour(){
    this.storage.set('perHour', this.perHour);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.storage.get('perHour').then((val) => {
      this.perHour = val
    });
  }

}
