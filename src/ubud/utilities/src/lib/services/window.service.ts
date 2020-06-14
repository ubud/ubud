import { isPlatformBrowser } from '@angular/common';
import { Injectable, Injector, OnDestroy, PLATFORM_ID } from '@angular/core';

interface Interface extends OnDestroy {}

export function useFactory(injector: Injector) {
    if (isPlatformBrowser(injector.get(PLATFORM_ID))) {
        return window;
    } else {
        return new Proxy(
            {},
            {
                get(obj, prop) {
                    console.warn(`Should avoid use window.${prop.toString()} on SSR`);

                    return obj[prop];
                },
                set(obj, prop, value) {
                    obj[prop] = value;
                    console.warn(`Should avoid use window.${prop.toString()} on SSR`);

                    return true;
                },
            },
        );
    }
}

@Injectable({
    providedIn: 'root',
    useFactory,
    deps: [Injector],
})
export class WindowService {
    public navigator: any = {};
    public location: any = {};

    public dataLayer: any[] = [];

    public alert(msg: string) {
        return;
    }

    public confirm(msg: string) {
        return;
    }

    public btoa(msg: string): string {
        return null;
    }

    public scrollTo(a: number, b: number) {
        return null;
    }

    public open(...args: any[]): any {
        return null;
    }

    public setTimeout(handler: (...args: any[]) => void, timeout?: number): number {
        return 0;
    }

    public clearTimeout(timeoutId: number): void {}

    public setInterval(handler: (...args: any[]) => void, ms?: number, ...args: any[]): number {
        return 0;
    }

    public clearInterval(intervalId: number): void {}

    public ga(command: string | Function, params?: any, extra?: any): void {}
}
