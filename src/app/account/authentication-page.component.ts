import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  template: require('./authentication-page.component.html')
})
export class AuthenticationPageComponent {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

//   login() {
//     if (this.accountService.login(this.user, this.password)) {
//       const destination = this.route.snapshot.queryParams['destination'] || '/';
//       this.router.navigateByUrl(destination);
//     }
//   }

}
