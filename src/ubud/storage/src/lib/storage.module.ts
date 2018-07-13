import { ModuleWithProviders, NgModule, Optional, SkipSelf, Type } from '@angular/core';
import { Storage } from './contracts/storage';

@NgModule()
export class UbudStorageModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: UbudStorageModule,
    ) {
        if (parentModule) {
            throw new Error(`UbudStorageModule has already been loaded. Import the module in the AppModule only.`);
        }
    }

    public static forRoot(impl: Type<Storage>): ModuleWithProviders {
        return {
            ngModule: UbudStorageModule,
            providers: [
                {
                    provide: Storage,
                    useClass: impl,
                },
            ],
        };
    }
}
