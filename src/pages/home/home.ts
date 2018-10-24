import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import * as math from 'mathjs'

import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private db:DatabaseProvider,  public navCtrl: NavController) {
    this.getToday()
  }
  today : String;
  timeOnWork : any = moment().format("HH:mm:ss");
  timeOffWork: any = moment().format("HH:mm:ss");
  workTime: number;
  toDayMoney: number;
  

  getToday(){
    this.today = moment().format("YYYY-MM-DD");
  }

  calcWorkingTime(){
    
    const start = moment( this.timeOnWork ,'HH:mm')
    const end = moment(this.timeOffWork,'HH:mm')

    const duration = moment.duration(end.diff(start))
    this.workTime = math.round(duration.as('hours'),2)
    
    this.db.getPerHour().then(val=>{
      this.toDayMoney = val.value * this.workTime

      this.db.saveDaily(
        {date:this.today, 
          timeOnWork:this.timeOnWork,
          timeOffWork:this.timeOffWork,
          workTime: this.workTime,
          value:this.toDayMoney}
      )
    })

    
  }



}
