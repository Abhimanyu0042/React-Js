import React, { useState } from 'react'

export default function Component2() {
  const [text, setText] = useState("In CU, hello guys the text will be converted on clicking ! ");
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
  const handleOnSubmit = () => {
    if (text.length<2){
      alert("Add the text to continue");
    } 
    else{
      alert("text box is filled")
    }
  }
  const Slice = () => {
    let newtext = text.slice(7,12);
    setText(newtext);
  } 
  const concat = () => {
    var text1=" hello"
    let newtext=text.concat(text1,text);
    setText(newtext);
  }
  //let myStyle={
  //  color:'black',
  //  backgroundColor:'lightblue',
  //}
  const[myStyle, setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'
  })
  //const[myStyle, setMyStyle]=useState('initialState')
  const toggleStyle=()=>{
    if(myStyle.color=='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
    }
  }

   return (
    <>
      <div className='container my-3'>
        <textarea className="form-control" id="txtbox" rows="10" value={text} onChange={handleOnChange} ></textarea><br></br>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert</button>
        <button className="btn btn-primary mx-2" onClick={replaceStr}>Replace</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleOnSubmit}>Submit</button>
        <button className="btn btn-primary mx-2" onClick={Slice}>Slice</button>
        <button className="btn btn-primary mx-2" onClick={concat}>Concat</button>
      </div>
      <div className='container my-3'>
        <h2> Summary </h2>
        <p>Total number of words: {text.split(" ").length}</p>
        <p>Total number of Characters: {text.length}</p>
      </div>
      <br></br>
      <div className="container my-3" >
      <div class="accordion" id="accordionExample" style={myStyle} >
  <div class="accordion-item" >
    <h1 style={myStyle}>Discussion of Accordian</h1>
    <h2 class="accordion-header" id="headingOne">
      <button style={myStyle} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
    <br></br>
    <button className="btn btn-primary mx-2" onClick={toggleStyle}>Change Mode</button>
  </div>
</div>
</div>
    </>
  )
}