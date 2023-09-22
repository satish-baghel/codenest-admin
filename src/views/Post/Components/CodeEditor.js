import Editor from '@monaco-editor/react';

const CodeEditorWindow = (props) => (
    <div>
        <Editor
            height="90vh"
            width="100vh"
            language="javascript"
            // value={value}
            theme="vs-dark"
            // theme={theme}
            defaultValue="// let's write some broken code 😈"
            // onChange={handleEditorChange}
            {...props}
        />
    </div>
);
export default CodeEditorWindow;
