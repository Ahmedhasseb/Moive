import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoneComponent } from './hone/hone.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleComponent } from './people/people.component';
import { TVshowesComponent } from './tvshowes/tvshowes.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaxLenghtPipe } from './max-lenght.pipe';
import { SearchPipe } from './search.pipe';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component'
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';






@NgModule({
  declarations: [
    AppComponent,
    HoneComponent,
    AboutComponent,
    NavbarComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    TVshowesComponent,
    NetworkComponent,
    NotfoundComponent,
    MoviesComponent,
    MaxLenghtPipe,
    SearchPipe,
    LoaderComponent,

    
 
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    LoadingBarModule,
 LoadingBarRouterModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
