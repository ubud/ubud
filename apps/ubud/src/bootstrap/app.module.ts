import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UbudTemplateModule } from '@ubud/template';
import { UbudSidebarMenuModule } from '@ubud/menus';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudUtilitiesModule } from '@ubud/utilities';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudUserControlModule } from '@ubud/user-control';
import { routing } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../domains/reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([]),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        StoreDevtoolsModule.instrument(<any> {
            maxAgent: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule,
        routing,
        UbudUtilitiesModule,
        UbudTemplateModule,
        UbudSidebarMenuModule,
        UbudTooltipModule,
        UbudDropdownModule,
        UbudUserControlModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
