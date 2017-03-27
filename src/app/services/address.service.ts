import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AddressModel } from '../models/address.model';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class AddressService {
    /*
    * Vars needed for various things
    */
    private customerAddressesEndpoint = 'id-addresses/mine';
    private singleAddressEndpoint = 'customers/addresses';
    private headers = null;
    private error: string;
    /*
    * Injecting services for use later
    */
    constructor(
        private http: Http,
        private config: ConfigurationService,
        private router: Router
    ) { }
    
};
