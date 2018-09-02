import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import * as math from 'mathjs'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private storage: Storage, public navCtrl: NavController) {
    this.getToday()
  }
  today : String;
  timeOnWork : any = moment().format("HH:mm:ss");
  timeOffWork: any;
  workTime: number;
  toDayMoney: number;
  

  getToday(){
    this.today = moment().format("YYYY-MM-DD");
  }

  calcWorkingTime(){
    console.log("calcWorkingTime")
    const start = moment( this.timeOnWork ,'HH:mm')
    const end = moment(this.timeOffWork,'HH:mm')

    const duration = moment.duration(end.diff(start))
    this.workTime = math.round(duration.as('hours'),2)
    
    this.storage.get('perHour').then(val=>{
      this.toDayMoney = val * this.workTime
    })
  }



}
