import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private login: LoginService, private router: Router) {}
  

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
