import React from 'react';
import styles from './FormsControls.module.css';
import {FieldValidatorType} from '../../../utils/validators/validators';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} className={`${styles._textareaCell} ${meta.touched && meta.error ? styles._error : ''}`} />
    </FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
    <input {...input} {...restProps} className={`${styles._formStyles} ${meta.touched && meta.error ? styles._error : ''}`} />
    </FormControl>
}

export function createField <FormKeysType extends string> (placeholder: string | undefined,
                            name: FormKeysType,
                            validators: FieldValidatorType[],
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') {
    return (
        <div className={styles.fieldCell}>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
            {text ? <span className={styles._formMark}>{text}</span>: null}
        </div>
    )
}

export type GetStringKeys<T> =  Extract<keyof T, string>