import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductService{
    constructor(private http:Http){}
    paiging(){
        let url = 'http://192.168.1.13:803/API/news/paging';
        let list;
        return this.http.get(url)
        .toPromise()
        .then(res=>res.json())
        .catch(err=>{
            console.log('err:'+err);
        })
    }  

}