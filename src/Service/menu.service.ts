import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MenuService{
    constructor(private http:Http){}
    getchild(){
        let url = 'http://192.168.1.13:800/API/menu/getchild';
        let params = {params:{pid:1}};
        return this.http.get(url,params)
        .toPromise()
        .then(res=>res.json())
        .catch(err=>{
            console.log('err:'+err);
        })
    }  

}