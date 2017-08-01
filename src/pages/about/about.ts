import {Component}from '@angular/core';
import {TeamPage}from './team/team';
import {Company}from './company/main';
import {Map} from '../component/map/main';

@Component({
    selector:'about',
    templateUrl:'about.html'
})
export class AboutPage{
    pet:string = 'desc';
    team:any = TeamPage;
    company:any = Company;
    map:any = Map;
    constructor(){
        console.log('AboutPage')
    }
}