import  { useState } from "react";
import React from 'react'


export default function Text(props) {
  const [text, setText] = useState("");
  const [btnText,setBtnText]=useState('Enable Dark-Mode')
  const [myColor,setColor]=useState({
    color:'black',
    backgroundColor:'white'
  })
  let upperCase = () => {
    let upper = text.toUpperCase();
    setText(upper);
  };
  let lowerCase = () => {
    let upper = text.toLowerCase();
    setText(upper);
  };
  let clearText = () => {
    setText("");
  };
  let onCh = (e) => {
    setText(e.target.value);

    //   console.log(text);
  };
  let copyText = (e) => {
  
    navigator.clipboard.writeText(text)
  };
  let removeSpace = (e) => {
  let removeSpaces=text.split(/[ ]+/);
  setText(removeSpaces.join(" "))
  };
  let darkText = (e) => {
  console.log('object');
 if(myColor.color==='black' && myColor.backgroundColor==='white'){
    setColor({
        color:'aqua',
        backgroundColor:'black'
      
    })
    setBtnText('Enable Light-Mode')
 }else{
    setColor({
        color:'black',
        backgroundColor:'white',
      
    })
    setBtnText('Enable Dark-Mode')
 }


  };
  return (
    <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}  style={{
        color:props.redmode==='red'?'white':'black'
      }} >
        <h1 className="name">{props.heading}</h1>
        <textarea
          className="form-control my-3"
          style={myColor}
          id="text-area"
          rows="5"
          value={text}
          onChange={onCh}
        ></textarea>{" "}
      </div>
      <div className="container my-2">
        <button disabled={text.length===0} className="btn btn-primary" onClick={upperCase}>
          Convert to Upper-Case
        </button>{" "}
        <button disabled={text.length===0} className="btn btn-success" onClick={lowerCase}>
          Convert to Lower-Case
        </button>{" "}
        <button disabled={text.length===0} className="btn btn-danger my-1" onClick={clearText}>
          Clear Text
        </button>
       
        <button disabled={text.length===0} className="btn btn-warning mx-1" onClick={copyText}>
        Copy to ClipBoard
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1" onClick={removeSpace}>
        Format Text
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1" onClick={darkText}>
         {btnText}
        </button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h2 className="name">Text Preview</h2>
        <p>{text.length>0?text:'Enter text above to preview here'}</p>
        <h2 className="name">Text Counter</h2>
        <p>
          There are <b>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and
          <b>{text.length}</b> letters in your text
        </p>
        <h2 className="name">Time Predictor</h2>
        <p>
          <b>
            {0.0033 * text.split("").filter((element)=>{return element.length!==0}).length} mins it would take you to read all your text
          </b>
        </p>
     
        <p style={{fontWeight:'bolder'}}>React-App : <strong> Created By Saad Ishfaq</strong></p>
      </div>
    </>
  );
}