import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import * as moment from 'moment';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lists: object[]
  month: any

  constructor( private db:DatabaseProvider, public navCtrl: NavController) {
    this.month = moment().format("M")
    console.log(this.month)
  }


  ionViewDidLoad(){
    this.getMounthData()
  }
  getMounthData(){
    this.db.getAllDaily().then(data=>{
      this.lists = data.filter(d => {
        return moment(d.date).format('M') == this.month
      })
      
      console.log(this.lists)
    })
  }

}
