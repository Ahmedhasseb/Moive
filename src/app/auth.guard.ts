import { CanActivateFn } from '@angular/router';
import { AuthRegisterService } from './auth-register.service';

export const authGuard: CanActivateFn = (route, state) => {

  
  
  return localStorage.getItem('usertoken')==null?false:true;
};
