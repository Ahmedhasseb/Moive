import { Component } from '@angular/core';
import { MoviesapiService } from '../moviesapi.service';


@Component({
  selector: 'app-tvshowes',
  templateUrl: './tvshowes.component.html',
  styleUrls: ['./tvshowes.component.css']
})
export class TVshowesComponent {
tvshows:any[]=[];
imgBaseUrl:string='';
  constructor(public _api:MoviesapiService){
    this.imgBaseUrl=_api.imgBaseUrl;
  }
  gaetTv(){
    this._api.movieTranding('tv').subscribe((data)=>{
    this.tvshows= data.results
    })
      }

      ngOnInit():void{
        
        this.gaetTv()
        
          }
}
