/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Validators } from '@angular/forms';
import { ErrorMessages, Rule } from '@ubud/form';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {};
    }

    public get task(): Function {
        return Validators.required;
    }

    public getFormControls(): object {
        return {
            task: ['', this.task],
        };
    }
}
