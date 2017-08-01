import { Component} from '@angular/core';
import {Team} from '../../../app/team';
import {TeamService} from './team.service';
@Component({
    templateUrl:'team.html',
    providers:[TeamService]
})
export class TeamPage{
    teams;
    list;
    // teamService = new TeamService();
    constructor(private teamService:TeamService){}  

      ngOnInit():void{   
         this.GetData(); 
          this.teamService.getJson().then(res=>this.teams = res);
        // this.teamService.getJSONData();       
        // this.teams = this.teamService.getJson();         
        // console.log(this.teams);
    }
    async GetData(){
        await this.teamService.getOriginJSON().then(res=>{
            this.list = res;
        })
    }

//     doRefresh(refresher){
//         console.log(refresher);
//         setTimeout(()=>{
//             this.teams.push();
//             console.log('2222')
//             refresher.complete();
//         },1000);
//     }
//     doInfinite(infiniteScroll) {
//     console.log('Begin async operation');

//     setTimeout(() => {
//       for (let i = 0; i < 30; i++) {
//         this.teams.push( {id:i,name:'张三'+i} );
//       }

//       console.log('Async operation has ended');
//       infiniteScroll.complete();
//     }, 500);
//   }
}