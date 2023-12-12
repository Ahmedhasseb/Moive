import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthRegisterService } from '../auth-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login:FormGroup=new FormGroup ({

    'email':new FormControl(null,[Validators.required,Validators.email]),

   'password':new FormControl(null),
   
 })


 constructor(private _authRegister:AuthRegisterService,private _router:Router){}

 submitform(){
  if(this.Login.invalid){
    return;
  }
  this._authRegister.loginApi(this.Login.value).subscribe((data)=>{
    console.log(data)

    if(data.message=='success'){
      localStorage.setItem('usertoken',data.token)
      this._authRegister.saveData()
      this._router.navigateByUrl('/home')

    }
    else{
      alert(data.message)
    }
  })
console.log(this.Login.value)

}

}

// ,[Validators.required,Validators.pattern(/^[a-z][0-9]{5}[a-z]{2}$/)]