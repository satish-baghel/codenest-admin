import Editor from '@monaco-editor/react';

const CodeEditorWindow = (props) => (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
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
