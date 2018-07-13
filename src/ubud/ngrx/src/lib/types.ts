import { Message } from './message';
import { Type } from '@angular/core';

export type MessageClass<T extends any> = Type<Message<T>> & { TYPE: symbol };
