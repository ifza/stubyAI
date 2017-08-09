import {Component}from '@angular/core';
@Component({
    templateUrl:'serve.html'
})
export class ServePage{
    public tabindex = '炫幕服务';
    constructor(){
        console.log('ServePage')
    }
}