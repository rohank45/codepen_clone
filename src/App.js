import React, { useEffect, useState } from "react";
import { BiExpand, BiCollapse } from "react-icons/bi";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/xml-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/trailingspace";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/selection/active-line";

const App = () => {
  const [srcDoc, setSrcDoc] = useState("");
  const [openHtml, setOpenHtml] = useState(true);
  const [openCss, setOpenCss] = useState(true);
  const [openJS, setOpenJS] = useState(true);
  const [HTML, setHTML] = useState("");
  const [CSS, setCSS] = useState("");
  const [JS, setJS] = useState("");
  // const [projectTypeFileExt, setProjectTypeFileExt] = useState("");

  // run playground code auto-run or on button click
  // const hanldeRunHtmlCode = () => {
  //   setTimeout(() => {
  //     setSrcDoc(`
  //       <html>
  //         <body>${HTML}</body>
  //         <style>${CSS}</style>
  //         <script>${JS}</script>
  //       </html>
  //     `);
  //   }, 250);
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
    <body>${HTML}</body>
    <style>${CSS}</style>
    <script>${JS}</script>
  </html>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [HTML, CSS, JS]);

  //  useEffect(() => {
  //    if (projectType === "python") {
  //      setProjectTypeFileExt("py");
  //    } else if (projectType === "java") {
  //      setProjectTypeFileExt("java");
  //    } else if (projectType === "html") {
  //      setProjectTypeFileExt("html");
  //    } else {
  //      setProjectTypeFileExt("txt");
  //    }
  //  }, [projectType]);

  //  // download code from editor as a file
  //  const handleDownload = async () => {
  //    console.log("handleDownload");

  //    var dataToDownload =
  //      code !== ""
  //        ? code
  //        : `\n html: \n ${HTML}, \n\n css: \n ${CSS}, \n\n js: \n ${JS}`;
  //    // : `<html>
  //    //     <body>${HTML}</body>
  //    //     <style>${CSS}</style>
  //    //     <script>${JS}</script>
  //    //   </html>`;

  //    const downloadLink = document.createElement("a");
  //    const file = new Blob([dataToDownload], {
  //      type: "text/plain;charset=utf-8",
  //    });
  //    downloadLink.href = URL.createObjectURL(file);
  //    downloadLink.download = `${projectName.replace(
  //      / /g,
  //      ""
  //    )}.${projectTypeFileExt}`;
  //    document.body.appendChild(downloadLink);
  //    downloadLink.click();
  //  };

  return (
    <div className="w-11/12 mx-auto mobile:w-full ipad:w-full">
      <div className="w-full flex justify-center mt-5 ipad:flex-col mobile:flex-col">
        <div className="pane flex flex-col top-pane w-11/12 mx-auto mobile:w-full ipad:w-full">
          <div className={`editor-container ${openHtml ? "" : "collapsed"}`}>
            <div className="editor-title">
              HTML
              <button
                type="button"
                className="expand-collapse-btn mobile:hidden"
                onClick={() => setOpenHtml((prevOpen) => !prevOpen)}
              >
                {openHtml ? <BiCollapse /> : <BiExpand />}
              </button>
            </div>

            <ControlledEditor
              value={HTML}
              onBeforeChange={(editor, data, value) => {
                // console.log("value", value);
                setHTML(value);
              }}
              // onChange={(editor, data, value) => {
              //   console.log("value", value);
              // }}
              className="code-mirror-wrapper"
              options={{
                lint: true,
                mode: "xml",
                theme: "material",
                lineWrapping: true,
                lineNumbers: true,
                smartIndent: true,
                keyMap: "sublime",
                matchTags: true,
                matchBrackets: true,
                autoCloseTags: true,
                autoCloseBrackets: true,
                extraKeys: {
                  "Ctrl-Space": "autocomplete",
                },
              }}
            />
          </div>

          <div className={`editor-container ${openCss ? "" : "collapsed"}`}>
            <div className="editor-title">
              CSS
              <button
                type="button"
                className="expand-collapse-btn mobile:hidden"
                onClick={() => setOpenCss((prevOpen) => !prevOpen)}
              >
                {openCss ? <BiCollapse /> : <BiExpand />}
              </button>
            </div>

            <ControlledEditor
              value={CSS}
              onBeforeChange={(editor, data, css) => {
                // console.log("css", css);
                setCSS(css);
              }}
              className="code-mirror-wrapper"
              options={{
                lint: true,
                mode: "css",
                theme: "material",
                lineWrapping: true,
                lineNumbers: true,
                smartIndent: true,
                autoCloseTags: true,
                keyMap: "sublime",
                matchTags: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                extraKeys: {
                  "Ctrl-Space": "autocomplete",
                },
              }}
            />
          </div>

          <div className={`editor-container ${openJS ? "" : "collapsed"}`}>
            <div className="editor-title">
              JS
              <button
                type="button"
                className="expand-collapse-btn mobile:hidden"
                onClick={() => setOpenJS((prevOpen) => !prevOpen)}
              >
                {openJS ? <BiCollapse /> : <BiExpand />}
              </button>
            </div>

            <ControlledEditor
              value={JS}
              onBeforeChange={(editor, data, js) => {
                // console.log("js", js);
                setJS(js);
              }}
              className="code-mirror-wrapper"
              options={{
                lint: true,
                mode: "javascript",
                theme: "material",
                lineNumbers: true,
                lineWrapping: true,
                smartIndent: true,
                autoCloseTags: true,
                keyMap: "sublime",
                matchTags: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                extraKeys: {
                  "Ctrl-Space": "autocomplete",
                },
              }}
            />
          </div>
        </div>

        <div className="pane border-2 border-primary w-11/12 mx-auto mobile:w-full ipad:w-full">
          <div className="flex items-center p-1 border-b bg-secondary">
            {/* <button
              onClick={hanldeRunHtmlCode}
              className="font-semibold bg-primary px-1 text-white rounded-md"
            >
              RUN
            </button> */}

            <p className="text-center text-2xl font-semibold w-full">Output:</p>
          </div>

          <iframe
            className="pb-5"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
