import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import EditableForm from '../Components/EditableForm';

const tagList = [
    {
        label: 'img',
        value: 'Image'
    },
    {
        label: 'p',
        value: 'Paragraph'
    },
    {
        label: 'h2',
        value: 'Heading'
    },
    {
        label: 'List',
        value: 'ul'
    }
];
const DescriptionForm = ({ paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }) => {
    const [blocks, setBlocks] = useState([
        {
            text: 'This is First paragraph',
            tagName: 'p'
        }
    ]);
    return (
        <div>
            {' '}
            <Grid container sx={{ my: 3, ml: 1 }}>
                <Grid item xs={4} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="tagtype">Tag type</InputLabel>
                        <Select label="tagtype" labelId="tagtype">
                            {Array.isArray(tagList) && tagList.length
                                ? tagList.map((tag) => <MenuItem value={tag.value}>{tag.label}</MenuItem>)
                                : null}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container sx={{ my: 3, ml: 1 }}>
                <Grid item xs={12} sm={12}>
                    {blocks.map((data) => (
                        <Card variant="outlined" sx={{ px: 1 }}>
                            <EditableForm data={data} />
                        </Card>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between">
                    <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                        Back
                    </Button>
                    <AnimateButton>
                        <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                            Next
                        </Button>
                    </AnimateButton>
                </Stack>
            </Grid>
        </div>
    );
};

export default DescriptionForm;
