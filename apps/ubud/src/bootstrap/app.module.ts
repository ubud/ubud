import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UbudTemplateModule } from '@ubud/template';
import { UbudSidebarMenuModule } from '@ubud/menus';
import { RouterModule } from '@angular/router';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudUtilitiesModule } from '@ubud/utilities/utilities.module';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudUserControlModule } from '@ubud/user-control';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        RouterModule.forRoot([]),
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
