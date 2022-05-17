import React, {useState} from 'react'

export default function Component2() {
  const {text,setText} = useState("");
  const handleOnClick =()=>{
    //console.log("you clicked on the button");
    let newTxt = text.toUpperCase();
    setText(newTxt);
    console.log(newTxt);
  }
  const handleOnChange =(event)=>{
    //setText(event.target.value);
    console.log("You attempted to input the text");
  }
  return (
    <div>
      <textarea className="form-control1" id="txtbox" rows="10" onChange={handleOnChange} value={text}></textarea><br></br>
      <button className="btn btn-primary" onClick={handleOnClick}>Hello</button>
    </div>
  )
}