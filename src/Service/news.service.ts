import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class NewsService{
    
 private single = 'http://192.168.1.13:803/API/news/single';    
    constructor(private http:Http){}
    GetData(url,params){    
        return this.http.get(url,{params:params})
        .toPromise()
        .then(res=>res.json())
        .catch(err=>{
            console.log('err:'+err);
        })
    }
    GetSingle(id){
        let params={id:id};
        return this.http.get(this.single,{params:params})
        .toPromise()
        .then(res=>res.json())
        .catch(err=>{
            console.log(err);
        })
    }

}