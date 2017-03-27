import { Component, OnInit } from '@angular/core';

import { AccountModel } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'exchange',
    template: require('./exchange.component.html')
})

export class ExchangeComponent implements OnInit {

    private account: AccountModel;

    constructor(
        private accountService: AccountService
    ) { }

    ngOnInit() {

        console.info("Initing Exchange component");
        
        // this.accountService.getAccount().then(account => {
        //     this.account = account;        
        // });
        
    }

}
