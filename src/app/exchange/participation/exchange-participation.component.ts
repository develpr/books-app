import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  template: require('./exchange-participation.component.html')
})
export class ExchangeParticipationComponent {

  user = '';
  password = '';

  constructor(private route: ActivatedRoute,
              private router: Router) { }


}
