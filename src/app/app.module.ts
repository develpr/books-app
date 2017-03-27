import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*
* Load the main component and its routes
*/
import { AppComponent } from './app.component';
import { routing } from './app.routing';

//Submodules
import { AccountModule } from './account/account.module';


/*
* Login
*/
import { LoggedInGuard } from './guards/logged-in.guard';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeParticipationComponent } from './exchange/participation/exchange-participation.component';

import { HttpClient } from './http/httpclient';
import { AccountService } from './services/account.service';
import { AddressService } from './services/address.service';
import { ExchangeService } from './services/exchange.service';

import { ConfigurationService } from './services/configuration.service';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      AccountModule
  ],
  declarations: [    
    AppComponent,
    ExchangeComponent,
    ExchangeParticipationComponent
  ],
  providers: [    
    LoggedInGuard,
    AddressService,
    AccountService,
    ExchangeService,
    ConfigurationService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
