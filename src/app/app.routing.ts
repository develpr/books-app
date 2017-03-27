import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
/*
* Components to load the right scene
*/
import { AuthenticationPageComponent } from './account/authentication-page.component';
import { ExchangeComponent } from './exchange/exchange.component';

export const routing = RouterModule.forRoot([
    {
        path: 'authenticate',
        component: AuthenticationPageComponent
    },
    {
        path: '',
        component: ExchangeComponent,        
        canActivate: [LoggedInGuard]
    }
]);
