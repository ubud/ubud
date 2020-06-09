import { Injectable } from '@angular/core';
import { Storage } from '../contracts/storage';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class NgxCookieAdapter implements Storage {
    private ubudCookie: object | null = null;

    public constructor(private cookieService: CookieService) {}

    private setInitial(): any {
        this.ubudCookie = JSON.parse(this.cookieService.get('ubud')) || {};
        this.cookieService.set('ubud', JSON.stringify(this.ubudCookie));
    }

    public async get<T>(key: string): Promise<T> {
        if (!this.ubudCookie) {
            this.setInitial();
            return this.get<T>(key);
        }

        return this.ubudCookie[key];
    }

    public async set<T>(key: string, value: T): Promise<void> {
        if (!this.ubudCookie) {
            this.setInitial();
            return this.set(key, value);
        }

        this.ubudCookie[key] = value;
        this.cookieService.set('ubud', JSON.stringify(this.ubudCookie));
    }

    public async remove(key: string): Promise<void> {
        this.cookieService.delete(key);
    }
}
