import {Component} from '@angular/core';
import{ProductService} from '../../Service/product.service'
import{MenuService} from '../../Service/menu.service'
@Component({
    templateUrl:'product.html',
        providers:[ProductService,MenuService]
})
export class ProductPage{
    public tabindex:any;
    public navMenu =[];
    public list =[];
    public index =1;
    public size =8;
    
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
                this.tabindex = this.navMenu[0].id;
                this.InitList();
            }
        });        
        
    }
    segmentChanged(segment){
        console.log(this.tabindex);
        if(segment.value != this.tabindex){
            this.index = 1;
            this.InitList();
        }
    }
    async InitList(){
        this.list = await this.ps.paiging({id:this.tabindex,index:0,size:this.size});
    }
    doInfinite(infiniteScroll) {  
        
        this.ps.paiging({id:4,index:this.index,size:this.size}).then(res=>{
            if(res.length > 0){
                this.list = this.list.concat(res);
                this.index++;
            }else{
                infiniteScroll.enable(false);
            }
            
            infiniteScroll.complete();
        });
   
  }
}