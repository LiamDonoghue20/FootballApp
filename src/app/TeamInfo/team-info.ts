import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'team-info',
    templateUrl : './team-info.component.html'
})

export class TeamInfoComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute,
              private router: Router){}

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        
    }

    selecTeamScreen():void {
        this.router.navigate(['/teams']);
      }
      
}