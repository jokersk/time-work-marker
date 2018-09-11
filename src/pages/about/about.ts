import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lists: object[]
  constructor( private db:DatabaseProvider, public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
    this.getMounthData()
  }
  getMounthData(){
    this.db.getAllDaily().then(data=>{
      this.lists = data
      console.log(this.lists)
    })
  }

}
