export const required = (value) => {
    return value ? undefined : 'Field is required';
};

export const maxLengthCreator = max => value => {
    return value.length > max ? `Max length is ${max} symbols` : undefined;
}