import { Component } from '@angular/core';
import { MoviesapiService } from '../moviesapi.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-hone',
  templateUrl: './hone.component.html',
  styleUrls: ['./hone.component.css']
})
export class HoneComponent {
resultList:any[]=[]
tvshows:any[]=[]
personList:any[]=[]

constructor(private _api:MoviesapiService){}

  }
 
   



