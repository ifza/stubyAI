import {Component}from '@angular/core';
@Component({
    templateUrl:'serve.html'
})
export class ServePage{
    public tabindex = 'process';
    constructor(){
        console.log('ServePage')
    }
}