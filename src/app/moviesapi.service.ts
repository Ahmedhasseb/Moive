import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {
  imgBaseUrl:string='https://image.tmdb.org/t/p/original'

  constructor(private http:HttpClient) { }

  movieTranding(path:string):Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/trending/${path}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  }
  Details(path:string,id:number):Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/${path}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }
  TrandingAllWeek():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
   }

}
