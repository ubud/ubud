import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { HttpBackend, HttpClient, HttpInterceptor } from '@angular/common/http';
import { ubudHttpClientFactory } from './factories/http-factory';
import { BaseUriInterceptor } from './interceptors/base-uri.interceptor';

export interface UbudHttpConfig {
    baseUri?: string;
    token: InjectionToken<HttpInterceptor[]>;
    class: Type<HttpClient>;
}

@NgModule()
export class UbudHttpModule {
    public static forFeature(config: UbudHttpConfig): ModuleWithProviders {
        return {
            ngModule: UbudHttpModule,
            providers: [
                {
                    provide: config.token,
                    useValue: new BaseUriInterceptor(config.baseUri || ''),
                    multi: true,
                },
                {
                    provide: config.class,
                    useFactory: ubudHttpClientFactory,
                    deps: [HttpBackend, config.token],
                },
            ],
        };
    }
}
