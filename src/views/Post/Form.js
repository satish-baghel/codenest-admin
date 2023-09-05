import { Button, CardContent, Step, StepLabel, Stepper, Typography, Stack } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import PostForm from './PostForms/PostForm';
import DescriptionForm from './PostForms/DescriptionForm';
import AnimateButton from 'ui-component/extended/AnimateButton';

const steps = ['Post', 'Description'];

const getStepContent = (step, handleNext, handleBack, setErrorIndex, shippingData, setShippingData, paymentData, setPaymentData) => {
    switch (step) {
        case 0:
            return (
                <PostForm
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    shippingData={shippingData}
                    setShippingData={setShippingData}
                />
            );
        case 1:
            return (
                <DescriptionForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    paymentData={paymentData}
                    setPaymentData={setPaymentData}
                />
            );
        default:
            throw new Error('Unknown step');
    }
};

const Form = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [shippingData, setShippingData] = React.useState({});
    const [paymentData, setPaymentData] = React.useState({});
    const [errorIndex, setErrorIndex] = React.useState(null);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <MainCard content={false}>
            <CardContent>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label, index) => {
                        const labelProps = {};

                        if (index === errorIndex) {
                            labelProps.optional = (
                                <Typography variant="caption" color="error">
                                    Error
                                </Typography>
                            );

                            labelProps.error = true;
                        }

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {getStepContent(
                    activeStep,
                    handleNext,
                    handleBack,
                    setErrorIndex,
                    shippingData,
                    setShippingData,
                    paymentData,
                    setPaymentData
                )}
            </CardContent>
        </MainCard>
    );
};
export default Form;
