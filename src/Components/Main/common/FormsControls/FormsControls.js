import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    return <textarea {...input} {...props} className={`${styles._textareaCell} ${meta.touched && meta.error ? styles._error : ''}`} />
}
export const Input = ({input, meta, ...props}) => {
    return <input {...input} {...props} className={`${styles._textareaCell} ${meta.touched && meta.error ? styles._error : ''}`} />
}
