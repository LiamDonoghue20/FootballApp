import { Component, EventEmitter,  OnDestroy, OnInit, Output } from "@angular/core";
import { ITeam } from "./team";
import { TeamService } from "../_services/team.service";
import { Subscription } from "rxjs";

@Component({
    selector:'team-select',
    templateUrl : './team-select.component.html'
})

export class TeamSelectComponent implements OnInit, OnDestroy {
    imageWidth: number = 150;
    imageMargin: number = 10;
    teams: ITeam[] = [];
    errorMessage: string = '';
    teamSelected: boolean = false;


    sub!: Subscription

    @Output() teamSelectedBoolOutput:EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() teamIdOutput:EventEmitter<number> = new EventEmitter<number>();
    @Output() lastOpponentId:EventEmitter<number> = new EventEmitter<number>();
    @Output() nextOpponentId:EventEmitter<number> = new EventEmitter<number>();
    @Output() teamFormOutput:EventEmitter<string> = new EventEmitter<string>();

    constructor(
                private teamService: TeamService){}

    ngOnInit(): void {
        this.sub = this.teamService.getTeams().subscribe({
            next: teams => {
                this.teams = teams
            }
      
        })
    }

    ngOnDestroy(): void {
        
    }

    selectTeam(teamId: number,  nextOpponentId: number, lastOpponentId: number, teamForm: string ){
        this.teamIdOutput.emit(teamId)
        this.nextOpponentId.emit(nextOpponentId)
        this.lastOpponentId.emit(lastOpponentId)
        this.teamFormOutput.emit(teamForm)
        this.teamSelectedBoolOutput.emit(true)
      
    }

 
      
}