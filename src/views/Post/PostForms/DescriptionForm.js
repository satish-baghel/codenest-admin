import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import EditableForm from '../Components/EditableForm';
import _ from 'lodash';

const tagList = [
    {
        value: 'img',
        label: 'Image'
    },
    {
        value: 'p',
        label: 'Paragraph'
    },
    {
        value: 'h2',
        label: 'Heading'
    },
    {
        value: 'ul',
        label: 'List'
    },
    {
        value: 'code',
        label: 'Code'
    }
];
const DescriptionForm = () => {
    const [tagName, setTagName] = useState('');

    const [blocks, setBlocks] = useState([
        {
            text: 'This is First paragraph',
            tagName: 'p'
        }
    ]);

    const onAddMore = () => {
        let obj = { tagName, text: '' };
        if (tagName === 'img') {
            obj = { tagName, imgUrl: '', text: '' };
        }
        if (tagName === 'ul') {
            obj = {
                tagName,
                text: [
                    {
                        tagName: 'li',
                        text: ''
                    }
                ]
            };
        }
        setBlocks([...blocks, obj]);
    };
    const addMoreList = (index) => {
        const obj = { tagName: 'li', text: '' };

        const list = blocks.map((data, i) => {
            if (i === index) {
                return {
                    ...data,
                    text: [...data.text, obj]
                };
            }

            return data;
        });
        setBlocks(list);
    };
    const onChange = (v, index, tagName, listingIndex) => {
        const data = blocks.map((data, i) => {
            const obj = data;

            if (index === i && data.tagName === tagName) {
                if (Array.isArray(obj.text)) {
                    return {
                        ...obj,
                        text: data.text.map((l, i) => {
                            if (i === listingIndex) {
                                return {
                                    ...l,
                                    text: v.target.value
                                };
                            }

                            return l;
                        })
                    };
                }
                if (tagName === 'code') {
                    return {
                        ...obj,
                        text: v
                    };
                }
                return {
                    ...obj,
                    text: v.target.value
                };
            }
            return obj;
        });
        setBlocks(data);
        // setBlocks((prev)=>{

        // })
    };

    //
    const onChangeFile = async (v, index) => {
        const files = v.target.files;

        const imagePromises = Array.from(files).map(
            (file) =>
                new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target.result);
                    reader.readAsDataURL(file);
                })
        );
        let res = await Promise.all(imagePromises);
        res = _.first(res);
        const data = blocks.map((data, i) => {
            const obj = data;
            if (index === i) {
                obj.imgUrl = res;
            }

            return obj;
        });
        setBlocks(data);
    };
    return (
        <div>
            {' '}
            <Grid container sx={{ my: 3, ml: 1, justifyContent: 'end' }}>
                <Grid item xs={4} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="tagtype">Tag type</InputLabel>
                        <Select label="tagtype" labelId="tagtype" onChange={(e) => setTagName(e.target.value)}>
                            {Array.isArray(tagList) && tagList.length
                                ? tagList.map((tag) => <MenuItem value={tag.value}>{tag.label}</MenuItem>)
                                : null}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} sm={1}>
                    <FormControl>
                        <Button variant="contained" type="submit" sx={{ ml: 1, mt: 1 }} onClick={onAddMore}>
                            Add
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container sx={{ my: 3, ml: 1 }}>
                {blocks.map((data, index) => (
                    <EditableForm data={data} onChange={onChange} index={index} onChangeFile={onChangeFile} addMoreList={addMoreList} />
                ))}
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between">
                    <AnimateButton>
                        <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }}>
                            Save
                        </Button>
                    </AnimateButton>
                </Stack>
            </Grid>
        </div>
    );
};

export default DescriptionForm;
