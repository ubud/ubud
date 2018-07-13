import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { HttpBackend, HttpClient, HttpInterceptor } from '@angular/common/http';
import { ubudHttpClientFactory } from './factories/http-factory';

@NgModule()
export class UbudHttpModule {
    public static forFeature(interceptorToken: InjectionToken<HttpInterceptor[]>, httpClientClass: Type<HttpClient>): ModuleWithProviders {
        return {
            ngModule: UbudHttpModule,
            providers: [
                {
                    provide: httpClientClass,
                    useFactory: ubudHttpClientFactory,
                    deps: [HttpBackend, httpClientClass, interceptorToken],
                },
            ],
        };
    }
}
