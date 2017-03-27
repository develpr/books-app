import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable, Input } from '@angular/core';

import { AccountModel } from '../models/account.model';
import { AddressModel } from '../models/address.model';
import { ConfigurationService } from './configuration.service'

@Injectable()
export class ExchangeService {
    /*
    * Vars needed for various things
    */
    private serviceEndpoint = 'customers/me';
    private headers = null;
    /*
    * Injecting services for use later
    */
    constructor(
        private http: Http,
        private config:ConfigurationService
    ) {}
    // /*
    // * Load the profile of the currently authorized user
    // */
    // public getAccount() {
    //     /*
    //     * Get options from config service
    //     */
    //     var requestOptions = this.config.getAuthedRequestOptions();
    //     requestOptions.method = "GET";
    //     /*
    //     * Make request and transform response
    //     */
    //     return this.http.get(
    //         `${this.config.getBaseUrl() + this.serviceEndpoint}`,
    //         requestOptions
    //     ).toPromise().then(
    //         response => this.transform(response.json())
    //     );
    // }
    // /*
    // * Normalize results to known model for templating
    // */
    // private transform(response): AccountModel {
    //     /*
    //     * Build an account from the defined model
    //     */
    //     let account: AccountModel = {
    //         givenName: response.givenName,
    //         familyName: response.familyName
    //     }

    //     return account;
    // }
    // /*
    // * Write changes to server from edit account section
    // */
    // public updateAccount(account: any) {
    //     /*
    //     * Get options from config service
    //     */
    //     var requestOptions = this.config.getAuthedRequestOptions();
    //     requestOptions.method = "PUT";

    //     return this.http.put(
    //         `${this.config.getBaseUrl() + this.serviceEndpoint}`,
    //         account,
    //         requestOptions
    //     ).toPromise().then(response => response);
    // }

}
