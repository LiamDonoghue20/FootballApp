import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ITeam } from "../TeamSelect/team";
import { catchError, tap, map} from "rxjs/operators";



@Injectable({
    providedIn: 'root'
})

export class TeamService {
    private teamDataUrl = "src\\app\\data\\team-data.json"

    constructor(private http: HttpClient){

    }

    getTeams(): Observable<ITeam[]>{
        return this.http.get<ITeam[]>(this.teamDataUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
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