import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router,
              private accountService: AccountService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    if (!this.accountService.isLoggedIn()) {
      window.location.href = "/authenticate";
      return false;
    }
    return true;
  }

}
