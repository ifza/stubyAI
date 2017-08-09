import {Component,Input} from '@angular/core';
import {NewsService} from '../../../Service/news.service';
import {DetailsPage} from '../../news/details/main';
@Component({
    selector:'news-limit',
    templateUrl:'index.html',
    providers:[NewsService]
})
export class NewsLimit{
    @Input() url:String = "http://192.168.1.13:803/API/news/limit";    
    @Input() id:Number = 2;
    @Input() size:Number = 5;
    public nxPage:any = DetailsPage;
    private list;
    constructor(private ns:NewsService){
    }
    ngOnInit(){
        this.initData();
    }
    initData(){
        this.ns.GetData(this.url,{id:this.id,size:this.size}).then(res=>this.list = res)
    }
}