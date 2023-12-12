import { Component } from '@angular/core';
import { AuthRegisterService } from '../auth-register.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
loggedin:boolean=false

constructor(private _auth:AuthRegisterService){}
logout(){
  this._auth.logout()
}
ngOnInit():void{
  this._auth.userdata.subscribe(()=>{
if(this._auth.userdata.getValue()){
  this.loggedin=true
}
else{
  this.loggedin=false
}
  })
}

}
