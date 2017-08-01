import {Component}from '@angular/core';
import {NavController}from 'ionic-angular';

@Component({
    selector:'myview',
    templateUrl:'myview.html'
})
export class MyViewPage{
    constructor(public navCtrl:NavController){
        console.log('test')
    }
}