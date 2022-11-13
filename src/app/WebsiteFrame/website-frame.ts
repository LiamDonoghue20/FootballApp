import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'website-frame',
    templateUrl : './website-frame.component.html'
})

export class WebsiteFrameComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute,
              private router: Router){}

    teamSelectedId: number = 0; 
    nextOpponentId: number = 0;      
    lastOpponentId: number = 0   
    teamForm: string =''


    teamSelectedBoolean: boolean = false;

    setTeamId(teamId: number){
      this.teamSelectedId = teamId;

  
    } 
    
    setTeamForm(teamForm: string){
      this.teamForm = teamForm;

  
    }            
    setNextOpponentId(nextOpponentId: number){
      this.nextOpponentId = nextOpponentId;
    }
    setLastOpponentId(lastOpponentId: number){
      this.lastOpponentId = lastOpponentId;
    }
    setTeamSelectedBoolean(teamSelectedBool: boolean){
      this.teamSelectedBoolean = teamSelectedBool;
    }
 

    


    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        
    }


}