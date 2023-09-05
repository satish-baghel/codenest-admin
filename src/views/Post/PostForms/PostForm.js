import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';

const PostForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
    console.log('first');
    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Post
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField id="title" name="title" label="Title *" fullWidth />
                </Grid>{' '}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select label="Category" labelId="category">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="sub-category">Sub Category</InputLabel>
                        <Select label="Sub Category" labelId="sub-category">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select label="Category" labelId="category">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                    <AnimateButton>
                        <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => handleNext(0)}>
                            Next
                        </Button>
                    </AnimateButton>
                </Stack>
            </Grid>
        </div>
    );
};

export default PostForm;
