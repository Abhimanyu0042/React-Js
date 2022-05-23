import React, { useState } from 'react'

export default function Component2() {
  const [text, setText] = useState("in CU, hello guys the text will be converted on clicking !");
  const handleOnClick = () => {
    //console.log("you clicked on the button");
    let newTxt = text.toUpperCase();
    setText(newTxt);
    console.log(newTxt);
  }
  const handleOnChange = (event) => {
    console.log("You attempted to input the text");
    setText(event.target.value);
  }
  const replaceStr = () => {
    let repStr = text.replace("CU","TU");
    setText(repStr);
  }
  const handleOnClear = () => {
    let newtext =" ";
    setText(newtext);
  }
  return (
    <>
      <div>
        <textarea className="form-control my-3" id="txtbox" rows="10" value={text} onChange={handleOnChange} ></textarea><br></br>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert</button>
        <button className="btn btn-primary mx-2" onClick={replaceStr}>Replace</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}>Clear</button>
      </div>
      <div className='container my-3'>
        <h2> Summary </h2>
        <p>Total number of words: {text.split(" ").length}</p>
        <p>Total number of Characters: {text.length}</p>
      </div>
    </>
  )
}