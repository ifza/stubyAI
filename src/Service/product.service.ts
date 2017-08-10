import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductService{
    constructor(private http:Http){}
    paiging(params){
        let url = 'http://192.168.1.13:800/API/news/paging';     
        return this.http.get(url,{params:params})
        .toPromise()
        .then(res=>res.json())
        .catch(err=>{
            console.log('err:'+err);
        })
    }  

}