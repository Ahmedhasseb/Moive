import { Component } from '@angular/core';

import { MoviesapiService } from '../moviesapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  personList:any[]=[];
  imgBaseUrl:string='';
constructor(public _api:MoviesapiService){
  this.imgBaseUrl=_api.imgBaseUrl;
}

person(){
  this._api.movieTranding('person').subscribe((data)=>{
  this.personList= data.results
  })
    }

    ngOnInit():void{
     
      
      this.person()
        }
}
