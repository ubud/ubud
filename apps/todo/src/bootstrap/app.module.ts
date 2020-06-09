import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UbudTemplateModule } from '@ubud/template';
import { UbudSidebarMenuModule } from '@ubud/menus';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudUserControlModule } from '@ubud/user-control';
import { routing } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SidebarPage } from '../pages/sidebar.page';
import { TopbarPage } from '../pages/topbar.page';
import { UbudNgrxModule } from '@ubud/ngrx';

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
