/* eslint-disable no-debugger */
import { Button, Card, Grid, TextField } from '@mui/material';
import { IconTrash } from '@tabler/icons';
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

//
const EditableForm = ({ data, onChange, index, onChangeFile, addMoreList }) => {
    const contentEditable = useRef();

    if (!['list', 'img'].includes(data.tagName)) {
        return (
            <>
                <Grid item xs={11} sm={11}>
                    <Card variant="outlined" sx={{ px: 1, mt: 1 }}>
                        <ContentEditable
                            innerRef={contentEditable}
                            html={data.text} // innerHTML of the editable div
                            disabled={false} // use true to disable editing
                            onChange={(e) => onChange(e, index, data.tagName)} // handle innerHTML change
                            tagName={data.tagName} // Use a custom HTML tag (uses a div by default)
                            style={{ padding: '10px' }}
                            placeholder="Enter here ...."
                        />
                    </Card>
                </Grid>
                <Grid item xs={1} sm={1}>
                    <Button variant="contained" component="label" sx={{ mx: 1, my: 'auto' }} color="error">
                        <IconTrash />
                    </Button>
                </Grid>
            </>
        );
    }
    if (['img'].includes(data.tagName)) {
        return (
            <>
                <Grid item xs={11} sm={11}>
                    <Card variant="outlined" sx={{ px: 1, mt: 1 }} style={{ width: '100%' }}>
                        <Button variant="contained" component="label" sx={{ my: 1 }}>
                            Upload File
                            <input type="file" hidden onChange={(e) => onChangeFile(e, index)} />
                        </Button>
                        <TextField value={data.text} onChange={(e) => onChange(e, index, data.tagName)} sx={{ ml: 1, width: '80%' }} />
                    </Card>
                    {data.imgUrl ? (
                        <Card variant="outlined" sx={{ px: 1, mt: 1 }}>
                            <img src={data.imgUrl} alt="imag" width={100} />
                        </Card>
                    ) : null}
                </Grid>
                <Grid item xs={1} sm={1}>
                    <Button variant="contained" component="label" sx={{ mx: 1, my: 'auto' }} color="error">
                        <IconTrash />
                    </Button>
                </Grid>
            </>
        );
    }
    if (['ul'].includes(data.tagName)) {
        return (
            <>
                <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'end', my: 1 }}>
                    <Grid item xs={1} sm={1}>
                        <Button variant="contained" component="label" sx={{ mx: 1, my: 'auto' }} onClick={() => addMoreList(index)}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
                {Array.isArray(data.text) && data.text.length
                    ? data.text.map((list, lIndex) => (
                          <>
                              <Grid item xs={11} sm={11}>
                                  <Card variant="outlined" sx={{ px: 1, mt: 1 }}>
                                      <ContentEditable
                                          innerRef={contentEditable}
                                          html={list.text} // innerHTML of the editable div
                                          disabled={false} // use true to disable editing
                                          onChange={(e) => onChange(e, index, data.tagName, lIndex)} // handle innerHTML change
                                          tagName={list.tagName} // Use a custom HTML tag (uses a div by default)
                                          style={{ padding: '10px' }}
                                      />
                                  </Card>
                              </Grid>
                              <Grid item xs={1} sm={1}>
                                  <Button variant="contained" component="label" sx={{ mx: 1, my: 'auto' }} color="error">
                                      <IconTrash />
                                  </Button>
                              </Grid>
                          </>
                      ))
                    : null}
            </>
        );
    }
    return null;
};

export default EditableForm;
