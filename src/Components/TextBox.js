import React,{useState} from "react";

export default function TextBox(props) {
  const theme=()=>{
    if(props.green==="green"){
      return "#08123e"
    }
    else if(props.red==="red"){
      return "#440101";
    }else if (props.mode === "dark") {
      return "#041801";
    } else {
      return "white";
    }
  }
    const upperclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("success","The text is converted to Upper case");
    }
    const lowerclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("success", "The text is converted to Lower case");
    }
    const onchangeclick=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    const cleartextclick=()=>{
      setText('');
      props.showalert("success", "The text is cleared successfully");
    }
    const copytextclick=()=>{
      navigator.clipboard.writeText(text);
      props.showalert("success", "The text is copied successfully");
    }
    const clearspaceclick=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("success", "The spaces are cleared successfully");
    }
    const pastetextclick=()=>{
      navigator.clipboard.readText().then((newtext) => {
        setText(text+newtext); // Assuming you have a setText function defined elsewhere
      });
      props.showalert("success", "The text pasted successfully");
    }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1
            style={{
              color:
                props.mode === "dark" ||
                props.red === "red" ||
                props.green === "green"
                  ? "white"
                  : "black",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control y-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={onchangeclick}
            placeholder="Enter Your Text"
            style={{
              color:
                props.mode === "dark" ||
                props.red === "red" ||
                props.green === "green"
                  ? "white"
                  : "black",
                  
              backgroundColor: theme()
            }}
          ></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={upperclick}>
            Change Text to UpperCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={lowerclick}>
            Change Text to LowerCase
          </button>

          <button className="btn btn-primary mx-2 my-2" onClick={copytextclick}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={pastetextclick}
          >
            Paste Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={clearspaceclick}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={cleartextclick}>
            Clear Text
          </button>
        </div>
      </div>
      <h2
        style={{
          color:
            props.mode === "dark" ||
            props.red === "red" ||
            props.green === "green"
              ? "white"
              : "black",
        }}
      >
        Text summary
      </h2>
      <p
        style={{
          color:
            props.mode === "dark" ||
            props.red === "red" ||
            props.green === "green"
              ? "white"
              : "black",
        }}
      >
        {text.length === 0 ? 0 : text.split(" ").length} words and {text.length}{" "}
        characters are present in Text
      </p>
      <p
        style={{
          color:
            props.mode === "dark" ||
            props.red === "red" ||
            props.green === "green"
              ? "white"
              : "black",
        }}
      >
        {0.008 * text.split(" ").length} minutes required to read the text
      </p>
      <h3
        style={{
          color:
            props.mode === "dark" ||
            props.red === "red" ||
            props.green === "green"
              ? "white"
              : "black",
        }}
      >
        Preview
      </h3>
      <p
        style={{
          color:
            props.mode === "dark" ||
            props.red === "red" ||
            props.green === "green"
              ? "white"
              : "black",
        }}
      >
        {text}
      </p>
    </>
  );
}
