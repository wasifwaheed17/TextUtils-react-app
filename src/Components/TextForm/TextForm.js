
import React, { useState }  from 'react'


export default function TextForm(props) {
   
    const handleupclick = () =>{
        console.log("button clicked");
        const newText= text.toUpperCase();
        console.log(newText);
        setText(newText);
    }
    const handleloclick = () =>{
        console.log("button clicked");
        const newText= text.toLowerCase();
        console.log(newText);
        setText(newText);
    }
    const handledoclick = () =>{
        console.log("button clicked");
        let newText= text;
        newText="";
        console.log(newText);
        setText(newText);
    }
     const handelonchange = (event) =>{
        console.log("button clicked");
        setText(event.target.value);
    } 

    const [text, setText] = useState("enter here");
    return(
    <>
        <div>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handelonchange} id="textBox" rows="8"></textarea>
</div>
< div className="container">
  <button className="btn btn-primary mx-2" onClick={handleupclick} >Convert To Uppercase</button>
  
  <button className="btn btn-primary mx-2" onClick={handleloclick} >Convert To Lowercase</button>
  <button className="btn btn-danger mx-2" onClick={handledoclick} >Remove Text</button>
  </div>
  <div className="container my-3">
    <h5>Your Text summary</h5>
    <p>{text.split(" ").length} words and {text.length}charcters</p>
    <p>{0.008*text.split(" ").length}minutes to read</p>
    <h5>Preview</h5>
    <p>{text}</p>
  </div>


  
  </div>
  </>
    )
}

