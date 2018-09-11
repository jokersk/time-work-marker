import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';


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
  dbPromise : any
  constructor(private db:DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  

  savePerHour(){
    this.db.savePerhour(this.perHour);
  }

  ionViewDidLoad() {
    this.db.getPerHour().then(data=>{
      this.perHour = data.value
    })
  }

}
