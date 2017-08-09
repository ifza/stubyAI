import {Component}from '@angular/core';
import {NavParams} from 'ionic-angular';
import {NewsService} from '../../../Service';
@Component({
    templateUrl:'index.html',
    providers:[NewsService]
})
export class DetailsPage{
    private id:Number;
    private data:any =[];
    constructor(public nanParams:NavParams,public ns:NewsService){
        this.id = this.nanParams.get('id'); 
         this.InitData();
    }

    async InitData(){
        
        await this.ns.GetSingle(this.id).then(r=>{
            this.data = r
            console.log(this.data)
        });
    }
}