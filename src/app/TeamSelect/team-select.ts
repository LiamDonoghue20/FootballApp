import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ITeam } from "./team";
import { TeamService } from "../_services/team.service";
import { Subscription } from "rxjs";

@Component({
    selector:'team-select',
    templateUrl : './team-select.component.html'
})

export class TeamSelectComponent implements OnInit, OnDestroy {
    imageWidth: number = 200;
    imageMargin: number = 8;
    teams: ITeam[] = [];
    errorMessage: string = '';

    sub!: Subscription


    constructor(private route: ActivatedRoute,
                private router: Router,
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

 
      
}