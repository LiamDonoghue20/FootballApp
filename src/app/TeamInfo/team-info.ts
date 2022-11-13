import { ThisReceiver } from "@angular/compiler";
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Console } from "console";
import { ITeam } from "../TeamSelect/team";
import { TeamService } from "../_services/team.service";

@Component({
    selector:'team-info',
    templateUrl : './team-info.component.html'
})

export class TeamInfoComponent implements OnInit {

    @Output() teamSelectedInput:EventEmitter<boolean> = new EventEmitter<boolean>();

 

    currentTeam: ITeam | undefined;
    lastOpponent: ITeam | undefined;
    nextOpponent: ITeam | undefined;
    errorMessage: string = '';
    teamId: number = 0;
    @Input() teamSelectedId: number = 0;   
    @Input() lastOpponentId: number = 0;  
    @Input() nextOpponentId: number = 0;
    @Input() teamForm: string ="";
    imageWidth: number = 100;
    imageMargin: number = 100;     
    lastResult: string = '';




    constructor(private route: ActivatedRoute,
              private teamService: TeamService){}

    

    teamsName: string = '';

    ngOnInit(): void {

        this.getTeam(this.teamSelectedId, this.nextOpponentId, this.lastOpponentId);

    }

    getTeam(id: number,  nextOpponentId: number, lastOpponentId: number): void {
        this.teamService.getTeam(id).subscribe({
            next: team => this.currentTeam = team,
            error: err => this.errorMessage = err,
        })
        this.teamService.getTeam(nextOpponentId).subscribe({
            next: team => this.nextOpponent = team,
            error: err => this.errorMessage = err
           
        })
        this.teamService.getTeam(lastOpponentId).subscribe({
            next: team => this.lastOpponent = team,
            error: err => this.errorMessage = err
        })
      
        this.getLastResult();
    }

    getLastResult(){
     

       if(this.teamForm.charAt(0).match('W')){
            this.lastResult = 'W'
       }
             
       else if(this.teamForm.charAt(0).match('L')){
            this.lastResult = 'L'
       }
       else if(this.teamForm.charAt(0).match('D')){
        this.lastResult = 'D'
         }        

     }







    selectTeamScreen():void {

        this.teamSelectedInput.emit(false)
  
        
      }

     

      
}