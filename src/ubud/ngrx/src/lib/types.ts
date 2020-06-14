import { Type } from '@angular/core';

import { Message } from './message';

export type MessageClass<T extends any> = Type<Message<T>> & { TYPE: symbol };
