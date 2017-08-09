import {Component}from '@angular/core';
import {Map} from '../component/map/main';

@Component({
    selector:'about',
    templateUrl:'about.html'
})
export class AboutPage{
    pet:string = '炫幕简介';
    map:any = Map;
    constructor(){
        console.log('AboutPage')
    }
}