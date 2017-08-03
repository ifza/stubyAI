import {Component} from '@angular/core';
import{ProductService} from '../../Service/product.service'
import{MenuService} from '../../Service/menu.service'
@Component({
    templateUrl:'product.html',
        providers:[ProductService,MenuService]
})
export class ProductPage{
    public tabindex = '7';
    public navMenu =[];
    public list =[];
    constructor(private ps:ProductService,private ms:MenuService){
        console.log('ProductPage');
    }
    ngOnInit(){
        this.InitDta();
    }
    async InitDta(){
        await this.ms.getchild().then(res=>{
            if(res.state == 1){
                this.navMenu = res.data
                }
        });        
        this.list = await this.ps.paiging();
        console.log(this.list);
        
    }
}