/* eslint-disable */
import validator from 'validator';
const isRequired = (name, value) => {
    let err = '';
    if (validator.isEmpty(value)) {
        err = `${name} field is required`;
    }
    return err;
};
const isEmail = (name, value) => {
    let err = '';
    if (!validator.isEmail(value)) {
        err = `${name} field is invalid`;
    }
    return err;
};

const isMinLength = (name, value, length) => {
    let minLength = Number(length.replace(/\D/g, ''));

    let err = '';
    if (minLength > value.length) {
        err = `${name} field is minimum ${minLength} characters`;
    }
    return err;
};

const isMaxLength = (name, value, length) => {
    let maxLength = Number(length.replace(/\D/g, ''));
    let err = '';
    if (maxLength <= value.length) {
        err = `${name} field is maximum ${maxLength} characters`;
    }
    return err;
};

export { isRequired, isEmail, isMinLength, isMaxLength };

/* eslint-enable */
