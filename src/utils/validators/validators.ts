export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string): string | undefined => {
    return value ? undefined : 'Field is required';
};

export const maxLengthCreator = (max: number): FieldValidatorType => (value) => {
    return value.length > max ? `Max length is ${max} symbols` : undefined;
}