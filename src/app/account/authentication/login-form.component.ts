import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'login-form',
    template: require('./login-form.component.html')
})
export class LoginFormComponent {

  user = '';
  password = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  login() {

      let self = this;

      this.accountService.login(this.user, this.password).then(
          function(success) {
              if(success === true) {
                  const destination = self.route.snapshot.queryParams['destination'] || '/';
                  self.router.navigateByUrl(destination);
              }
              else {
                  alert("Bad username or password");
              }
          }
      );
      
    // if ( this.accountService.login( this.user, this.password).then(
    //     function(stuff) {
    //         alert
    //     }
    // ) ) {
    
    //   console.info("logged in...");
    // } else {
    //     console.info("NOT logged in...");
    // }
  }

}
