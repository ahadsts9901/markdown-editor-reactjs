import { useState } from "react";
import "./App.css"
import MarkdownEditor from '@uiw/react-markdown-editor';
import MarkdownPreview from '@uiw/react-markdown-preview';

const App = () => {

  const [rich_text, set_rich_text] = useState("")

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1em" }}>
      <h3>Type Text Here:</h3>
      <div style={{ width: "100%", height: "25em", border: "1px solid black" }}>
        <MarkdownEditor
          style={{ width: "100%", height: "23em" }}
          onChange={(val: string) => set_rich_text(val)}
        />
      </div>
      <h3>Preview Text</h3>
      <MarkdownPreview
        source={rich_text}
        style={{ width: "100%" }}
      />
    </div>
  )
}

export default App