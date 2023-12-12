import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../moviesapi.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  resultList:any[]=[];
  imgBaseUrl:string='';
  
 public loader:boolean=false;

  constructor(private _api:MoviesapiService){
    this.imgBaseUrl=_api.imgBaseUrl;
    
  }
  ngOnInit(): void {
    
      

      this.getMovies();
    

  }
  

  getMovies(){
    this.loader=true
    this._api.movieTranding('movie').subscribe(
    (data)=>{
      
      this.resultList=data.results
      this.loader=false;
    },
    (err)=>{
      console.error(err);
      this.loader=false;

    }
     
    
    )

 
      }

     
}
