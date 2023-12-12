import { Component } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import { MoviesapiService } from '../moviesapi.service';
import {trigger,state,style,animation,transition,query,stagger,animate} from "@angular/animations"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({
          opaciity:0,
          transition: 'x(100)'
        }),
        animate(1000,style({
          opacity:2,
          transition:'x(100)'
        }))
      ])
    ])
  ]
    
    
             
  
})
export class DetailsComponent {

 details:any;
 array:any[]=[]
 BaseUrl:string=''
constructor(public _activate:ActivatedRoute,private _details:MoviesapiService){

this.BaseUrl=_details.imgBaseUrl
}
DisplayDetails(){
  let{mediatype,id}=this. _activate.snapshot.params
  this._details.Details(mediatype,id).subscribe((data)=>{
   this.details=data
  
   console.log(this.details)
  


  })
}

Similer(){
  this._details.TrandingAllWeek().subscribe(
    (data)=>
    {
      this.array=data.results;
     
    },
    
    
  )
}

ngOnInit():void{
this.DisplayDetails()
this.Similer()

}
}
