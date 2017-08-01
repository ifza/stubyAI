import {Component} from '@angular/core';
@Component({
    templateUrl:'product.html'
})
export class ProductPage{
    public tabindex = 'website';
    constructor(){
        console.log('ProductPage');
    }
}