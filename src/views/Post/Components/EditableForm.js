import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

//
const EditableForm = ({ data }) => {
    const contentEditable = useRef();

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <ContentEditable
            innerRef={contentEditable}
            html={data.text} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={handleChange} // handle innerHTML change
            tagName={data.tagName} // Use a custom HTML tag (uses a div by default)
            style={{ padding: '10px', border: 'none' }}
        />
    );
};

export default EditableForm;
