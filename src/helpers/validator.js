export const checkEmptyFields = (data, noneCheckFields = []) =>
    Object
        .entries(data)
        .filter(([key]) => !noneCheckFields?.includes(key))
        .some(([, value]) => Array.isArray(value) ?
            value.length === 0 :
            typeof (value) === 'string' ?
                value?.trim() == '' :
                !value
        );