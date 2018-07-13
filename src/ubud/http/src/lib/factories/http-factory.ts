import { HttpBackend, HttpClient, HttpInterceptor } from '@angular/common/http';
import { UbudHttpInterceptingHandler } from '../http-handler';
import { Type } from '@angular/core';

export function ubudHttpClientFactory(
    backend: HttpBackend,
    httpClientClass: Type<HttpClient>,
    interceptors: HttpInterceptor[] = [],
): HttpClient {
    return new httpClientClass(new UbudHttpInterceptingHandler(backend, interceptors));
}
