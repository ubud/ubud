import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudSidebarMenuModule } from '@ubud/menus';
import { UbudNgrxModule } from '@ubud/ngrx';
import { UbudTemplateModule } from '@ubud/template';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudUserControlModule } from '@ubud/user-control';

import { environment } from '../environments/environment';
import { SidebarPage } from '../pages/sidebar.page';
import { TopbarPage } from '../pages/topbar.page';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

@NgModule({
    declarations: [AppComponent, SidebarPage, TopbarPage],
    imports: [
        BrowserModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        routing,
        UbudNgrxModule.forRoot(),
        UbudTemplateModule,
        UbudSidebarMenuModule,
        UbudTooltipModule,
        UbudDropdownModule,
        UbudUserControlModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
