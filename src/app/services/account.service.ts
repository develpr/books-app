import { Injectable, Input } from '@angular/core';
import { AccountModel } from '../models/account.model';
import { AddressModel } from '../models/address.model';
import { HttpClient } from '../http/httpclient';
import { ConfigurationService } from './configuration.service'

@Injectable()
export class AccountService {
    /*
    * Vars needed for various things
    */
    private serviceEndpoint = 'users/me';
    private headers = null;    
    /*
    * Injecting services for use later
    */
    constructor(
        private httpClient: HttpClient,
        private config:ConfigurationService
    ) {}


    public isLoggedIn() {
        let token = this.config.getAuthToken();
        debugger;
        if( token && token.length > 0 ) {
            return true;
        }

        return false;
    }

    public login(username: string, password: string) {
        let credentials = {};
        let self = this;
        credentials['email'] = username;
        credentials['password'] = password;
        return this.httpClient.post("oauth/tokens", credentials).toPromise().then(
            function(response) {
                debugger;
                self.config.setAuthToken(response.json().token);   

                return true;                        
            }
        ).catch(
            function(error: Response) {
                return false;      
            }
        );
    }

    /*
    * Load the profile of the currently authorized user
    */
    public getAccount() {        
        return this.httpClient.get(
            this.serviceEndpoint
        ).toPromise().then(
            response => this.transform(response.json())
        );
    }
    /*
    * Normalize results to known model for templating
    */
    private transform(response): AccountModel {
        /*
        * Build an account from the defined model
        */
        let account: AccountModel = {
            givenName: response.givenName,
            familyName: response.familyName
        }

        return account;
    }
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
