import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), StoreRouterConnectingModule],
})
export class UbudNgrxModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: UbudNgrxModule,
    ) {
        if (parentModule) {
            throw new Error(`UbudNgrxModule has already been loaded. Import UbudNgrxModule in the AppModule only.`);
        }
    }

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: UbudNgrxModule,
        };
    }
}
