import { Form } from './form';

export interface FormFactory {
    create(): Form;
}
