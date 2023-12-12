import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthRegisterService } from '../auth-register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:string="Accounts Already eixets"
register:FormGroup=new FormGroup ({
   'name':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
   'email':new FormControl(null,[Validators.required,Validators.email]),
   'phone':new FormControl(null,[Validators.required,Validators.maxLength(13)]),
  'password':new FormControl(null),
  'rePassword':new FormControl(null)
})
constructor(private _authRegister:AuthRegisterService,private _router:Router){}
submitform(){
  if(this.register.invalid){
    return;
  }
this._authRegister.registerApi(this.register.value).subscribe((data)=>{
 if(data.message=='success')
 {
this._router.navigateByUrl('/login')
 }
 else{
this.error
 }})

}
}
