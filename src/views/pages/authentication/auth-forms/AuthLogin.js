import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { connect } from 'react-redux';
// project imports

import useForm from 'hooks/useForm';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginUser } from 'store/action/';
// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ loginUser, ...others }) => {
    const theme = useTheme();
    const { value, error, handleChange, onSubmit } = useForm({
        email: {
            display_name: 'Email',
            rule: ['required', 'email']
        },
        password: {
            display_name: 'Password',
            rule: ['required', 'password', 'min:2', 'max:32']
        }
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = await onSubmit();
        if (validation) {
            loginUser(value);
        }
    };
    return (
        <form noValidate {...others} onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-email-login">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    error={Boolean(error.email)}
                    value={value?.email || ''}
                    name="email"
                    onChange={handleChange}
                    label="Email"
                />
                {error.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {error.email}
                    </FormHelperText>
                )}
            </FormControl>

            <FormControl
                fullWidth
                error={Boolean(error.password)}
                // error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
            >
                <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={value?.password || ''}
                    name="password"
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    inputProps={{}}
                />
                {error.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                        {error.password}
                    </FormHelperText>
                )}
            </FormControl>

            <Box sx={{ mt: 2 }}>
                <AnimateButton>
                    <Button
                        disableElevation
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        Sign in
                    </Button>
                </AnimateButton>
            </Box>
        </form>
    );
};

FirebaseLogin.propTypes = {
    loginProp: PropTypes.number,
    loginUser: PropTypes.func
};

export default connect(null, { loginUser })(FirebaseLogin);
