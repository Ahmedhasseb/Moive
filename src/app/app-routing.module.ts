import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoneComponent } from './hone/hone.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TVshowesComponent } from './tvshowes/tvshowes.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HoneComponent,canActivate:[authGuard]},
  {path:"people",component:PeopleComponent,canActivate:[authGuard]},
  {path:"details/:id/:mediatype",component:DetailsComponent,canActivate:[authGuard]},
  {path:"about",component:AboutComponent,canActivate:[authGuard]},
  {path:"movie",component:MoviesComponent,canActivate:[authGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"TVshow",component:TVshowesComponent,canActivate:[authGuard]},
  {path:"network",component:NetworkComponent,canActivate:[authGuard]},

{path:'**',component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
