import {Component,Input} from '@angular/core';
import {LoadingController} from 'ionic-angular';
import{ProductService} from '../../../Service';


@Component({
    selector:'product-list',
    templateUrl:'index.html',
    providers:[ProductService]
})
export class ProductList{
    @Input() id :number;
    @Input() index:number = 1;
    @Input() size:number = 10;
    private list=[];
    constructor(public loadingCtrl:LoadingController,private ps:ProductService){

    }
    ngOnInit(){
        
        this.InitList()
    }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 5000);
    }
    InitList(){
         return this.ps.paiging({id:this.id,index:this.index,size:this.size}).then(res=>{
            this.list = this.list.concat(res);            
            return res.length >= this.size;
        });
    }
    loadPaging(infiniteScroll){
        this.index++;
        this.InitList().then(res=>{            
            if(res){
                infiniteScroll.complete();
            }else{
               infiniteScroll.enable(false);
            }            
        });
    }
}