import { useState, useEffect } from 'react';
import * as Validation from 'utils/validation';
import lodash from 'lodash-contrib';
/* eslint-disable */
const UseForm = (props) => {
    const [value, setValue] = useState({});
    const [error, setError] = useState({});
    useEffect(() => {
        let nameObj = {};
        Object.keys(props).forEach((e) => {
            nameObj[e] = '';
        });

        setError(nameObj);
        setValue(nameObj);
    }, []);
    const handleChange = async (e) => {
        const { name, value: v } = e.target;
        setValue({ ...value, [name]: v });
    };
    const onSubmit = async () => {
        try {
            const err = { ...error };

            let validationFlag = true;

            Object.keys(props).forEach(async (e) => {
                let label = props[e];
                for (let i = 0; i < label.rule.length; i++) {
                    const val = label.rule[i];

                    err[e] = '';
                    if (val === 'required') {
                        let vReq = Validation.isRequired(label.display_name, value[e]);
                        if (vReq) {
                            validationFlag = false;
                            err[e] = vReq;
                            break;
                        }
                    }
                    if (val === 'email') {
                        let vReq = Validation.isEmail(label.display_name, value[e]);
                        if (vReq) {
                            validationFlag = false;
                            err[e] = vReq;
                            break;
                        }
                    }

                    if (lodash.strContains(val, 'min')) {
                        let vReq = Validation.isMinLength(label.display_name, value[e], val);
                        if (vReq) {
                            validationFlag = false;
                            err[e] = vReq;
                            break;
                        }
                    }
                    if (lodash.strContains(val, 'max')) {
                        let vReq = Validation.isMaxLength(label.display_name, value[e], val);
                        if (vReq) {
                            validationFlag = false;
                            err[e] = vReq;
                            break;
                        }
                    }
                }
            });

            setError(err);
            return validationFlag;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        value,
        onSubmit,
        error,
        handleChange
    };
};

export default UseForm;

/* eslint-enable */
