import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

export interface HttpIntercepting {
    getInterceptorToken(): InjectionToken<HttpInterceptor[]>;
}
