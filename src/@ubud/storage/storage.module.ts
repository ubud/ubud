import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicStorageAdapter } from './driver/ionic-storage-adapter';
import { Storage } from './contracts/storage';

@NgModule({
    imports: [
        IonicStorageModule.forRoot(),
    ],
})
export class UbudStorageModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: UbudStorageModule,
            providers: [
                {
                    provide: Storage,
                    useClass: IonicStorageAdapter,
                },
            ],
        };
    }
}
