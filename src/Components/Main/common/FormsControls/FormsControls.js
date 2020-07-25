import React from 'react';
import styles from './FormsControls.module.css';
import {required} from "../../../../utils/validators/validators";
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    return <textarea {...input} {...props} className={`${styles._textareaCell} ${meta.touched && meta.error ? styles._error : ''}`} />
}
export const Input = ({input, meta, ...props}) => {
    return <input {...input} {...props} className={`${styles._formStyles} ${meta.touched && meta.error ? styles._error : ''}`} />
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
            {text ? <span className={styles._formMark}>{text}</span>: null}
        </div>
    )
}