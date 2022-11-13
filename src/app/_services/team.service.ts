import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ITeam } from "../TeamSelect/team";
import { catchError, tap, map} from "rxjs/operators";



@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private teamDataUrl = "../assets/team-data.json"

    constructor(private http: HttpClient){

    }

    getTeams(): Observable<ITeam[]>{
        console.log("The location is: "+this.teamDataUrl)
        return this.http.get<ITeam[]>(this.teamDataUrl).pipe(
        
            catchError(this.handleError)
        );

    }

    getTeam(id: number) : Observable<ITeam | undefined> {
        return this.getTeams()
                .pipe(
                    //find a product that matches the product id
                    map((teams: ITeam[]) => teams.find(team => team.teamId == id))
                );

    }


    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
           errorMessage = `An error: ${err.status}, error message is: ${err.message}`
        } else {
            errorMessage = `Server returned an error code ${err.status}, error message is: ${err.message}`
        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }

}