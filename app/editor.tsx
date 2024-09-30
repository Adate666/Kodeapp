"use client";
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const CodeEditorPage: React.FC = () => {
  const [code, setCode] = useState<string>("<h1>Bonjour, monde!</h1>");

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <header
        style={{ padding: "1rem", backgroundColor: "#282c34", color: "white" }}
        className="text-center font-mono text-3xl"
      >
        <h1>Éditeur de Code</h1>
      </header>
      <div style={{ display: "flex", flex: 1 }}>
        {/* Section Éditeur de Code */}
        <div
          style={{ flex: 1, padding: "1rem", borderRight: "1px solid #ddd" }}
        >
          <h2>Éditeur de Code</h2>
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.html, "html")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              minHeight: "400px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        {/* Section Interprétation */}
        <div style={{ flex: 1, padding: "1rem" }}>
          <h2>Interprétation du Code</h2>
          <div
            dangerouslySetInnerHTML={{ __html: code }}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "1rem",
              minHeight: "400px",
              backgroundColor: "foreground",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditorPage;
