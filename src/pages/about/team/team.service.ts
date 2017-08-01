import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {TEAMS} from '../../../app/mock-teams';
import {Team} from '../../../app/team';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TeamService{
    list:Team[];
    json_url ='data.json';
    constructor(private http:Http){

    }
    getTeams(){
        return TEAMS;
    }
   getJSONData(){
    console.log(this.json_url);    
       this.http.get(this.json_url).subscribe(res=>this.list = res.json())
       console.log(this.list);
    }
    getJson(){
     return this.http.get('./assets/data.json').toPromise().then(res => res.json())
            .catch(err => {
                console.log(err)
            });
    }

}