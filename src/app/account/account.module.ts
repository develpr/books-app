import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { ExchangeModule } from '../loading_module/loading.module';

import { LoginFormComponent } from './authentication/login-form.component';
import { RegistrationFormComponent } from './authentication/registration-form.component';
import { AuthenticationPageComponent } from './authentication-page.component';

import { AccountService } from '../services/account.service';
import { HttpClient } from '../http/httpclient';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        LoginFormComponent,
        RegistrationFormComponent,
        AuthenticationPageComponent
    ],
    providers: [
        AccountService,
        HttpClient
    ],
    exports: [
    ]
})
export class AccountModule {}
