import { Injectable } from '@angular/core';
import { Storage as IonicStorage } from '@ionic/storage';

import { Storage } from '../contracts/storage';

@Injectable()
export class IonicStorageAdapter implements Storage {
    public constructor(private readonly storage: IonicStorage) {}

    public get<T>(key: string): Promise<T> {
        return this.storage.get(key);
    }

    public set<T>(key: string, value: T): Promise<void> {
        return this.storage.set(key, value);
    }

    public remove(key: string): Promise<void> {
        return this.storage.remove(key);
    }
}
