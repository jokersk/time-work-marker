import { Injectable } from '@angular/core';
import idb from 'idb';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  dbPromise : any
  constructor() {
    console.log('Hello DatabaseProvider Provider');
    this.dbPromise = idb.open('work-time-marker', 1, upgradeDB => {
      upgradeDB.createObjectStore('perhour', {keyPath: 'key'});
      upgradeDB.createObjectStore('daily', {keyPath: 'key'});
    });
  }

  savePerhour(payload){
    this.dbPromise.then(db => {
      const tx = db.transaction('perhour', 'readwrite');
      tx.objectStore('perhour').put({'key':'perhour', 'value':payload});
      return tx.complete;
    }).catch(e=>{
      console.log(e)
    })
  }

  getPerHour(){
    return this.dbPromise.then(async db => {
      const tx = db.transaction('perhour', 'readonly');
      const store = tx.objectStore('perhour');
      return  await  store.get('perhour');
    })
  }

  saveDaily(payload){
    this.dbPromise.then(db => {
      const tx = db.transaction('daily', 'readwrite');
      tx.objectStore('daily').put({'key':payload.date, ...payload});
      return tx.complete;
    }).catch(e=>{
      console.log(e)
    })
  }

  getAllDaily(){
    return this.dbPromise.then(async db => {
      const tx = db.transaction('daily', 'readonly');
      const store = tx.objectStore('daily');
      return  await  store.getAll();
    })
  }

}
