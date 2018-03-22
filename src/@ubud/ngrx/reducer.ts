/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Message } from '@ubud/ngrx/message';
import { SelfHandling } from '@ubud/ngrx/contracts/self-handling';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export abstract class Reducer {
    protected abstract state: object;

    public static reduce(): Function {
        const reducer: any = new (<any> this)();

        return (state: any = reducer.state, action: Message | SelfHandling<any>): any => {
            if (Reducer.isSelfHandling(action)) {
                return action.handle(state);
            }

            const method = Reducer.camel((<Message> action).type);

            if ('function' === typeof reducer[method]) {
                return reducer[method](state, action);
            }

            return state;
        };
    }

    private static camel(text: string): string {
        return text.replace(/(\-\w)/g, (m: any) => m[1].toUpperCase());
    }

    private static isSelfHandling(action: Message | SelfHandling<any>): action is SelfHandling<any> {
        return undefined !== (<SelfHandling<any>> action).handle;
    }
}
