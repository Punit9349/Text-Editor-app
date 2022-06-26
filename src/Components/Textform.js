
import React, { useState } from 'react';


export default function Textform(props) {

    const handleUpClick= ()=>{
      //  console.log("Uppercase was clicked" + Text);
        let newText= Text.toUpperCase();
        setText(newText);
    }
    const handleOnchange= (event)=>{
     //   console.log("On change");
        setText(event.target.value);
      }

    const handleloClick=(event)=>{
     // console.log("Lowecase was clicked");
        let newText= Text.toLowerCase();
        setText(newText);
    }  

    const  [Text, setText] = useState("Enter your text here");

    return (
      <>
        <div>
            <h1>{props.heading}</h1>
            <div className="input-group mb-3" >
              
              <textarea className="form-control" aria-label="With textarea" value={Text} onChange={handleOnchange} rows="8"></textarea>
            </div>
              <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
              <button className= "btn btn-primary" style={{marginLeft:9}} onClick={handleloClick}> Convert to Lowercase</button>
              <button className= "btn btn-primary" style={{marginLeft:9}} onClick={handleloClick}> Clear Text</button>

           
        
            <div className= "container my-3 " style={{padding:0}} >
                <h2>Your Text summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008* Text.split(" ").length} Minutes read </p>
            </div>

            <div>
              <h2>Preview</h2>
              <p>{Text}</p>
            </div>

        </div>  
      </>
    )
}
