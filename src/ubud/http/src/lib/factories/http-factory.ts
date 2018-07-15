import { HttpBackend, HttpClient, HttpInterceptor } from '@angular/common/http';
import { UbudHttpInterceptingHandler } from '../http-handler';

export function ubudHttpClientFactory(backend: HttpBackend, interceptors: HttpInterceptor[] = []): HttpClient {
    return new HttpClient(new UbudHttpInterceptingHandler(backend, interceptors));
}
