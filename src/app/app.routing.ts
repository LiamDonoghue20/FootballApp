import { RouterModule, Routes } from "@angular/router";
import { TeamInfoComponent } from "./TeamInfo/team-info";
import { TeamSelectComponent } from "./TeamSelect/team-select";


const routes: Routes = [
    { path: 'team-select',  component: TeamSelectComponent},
    { path: '',  component: TeamSelectComponent},
    { path: 'team-info',  component: TeamInfoComponent},
    { path: '**', redirectTo: '' }


];

export const AppRoutingModule = RouterModule.forRoot(routes);