import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
Router
Observable

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {
  userdata=new BehaviorSubject(null)

  constructor(private _http:HttpClient,private _roter:Router) {
    if(localStorage.getItem('usertoken'))
    {

      this.saveData()
    }
   }
logout(){
  localStorage.removeItem('usertoken');
  this.userdata.next(null)
  this._roter.navigateByUrl('/login')

}
  saveData(){
    let jwtencoded=JSON.stringify(localStorage.getItem('usertoken'))
    let coded:any=jwtDecode(jwtencoded)
    this.userdata.next(coded)
    console.log(this.userdata)
  }

  registerApi(DataUser:any):Observable<any>
  {
return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',DataUser)
  }

  loginApi(DataUser:any):Observable<any>
  {
return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',DataUser)
  }
}