import { CardContent } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import PostForm from './PostForms/PostForm';
import DescriptionForm from './PostForms/DescriptionForm';

const Form = () => (
    <MainCard content={false}>
        <CardContent>
            <PostForm />
            <DescriptionForm />
        </CardContent>
    </MainCard>
);
export default Form;
