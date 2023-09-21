import React,{useState} from "react";

function Form(props){
    const handleonUpclick =()=>{
        let name = text.toUpperCase();
        setText(name)
    }
    const handleonLoclick =()=>{
        let name = text.toLowerCase();
        setText(name)
    }
  
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied Text");
     }

    const handleonchange =(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter Your Text");

    return(
        <>
           <div className="container">
             <div className="my-3">
                <h1>Text Area</h1>
                <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode === 'light'?'white':'#243152'}} ></textarea>
                <button className="btn btn-primary  mt-3 mx-2" onClick={handleonUpclick}>UperCase</button>
                <button className="btn btn-primary  mt-3 mx-2" onClick={handleonLoclick}>LowerCase</button>
                <button className="btn btn-primary  mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
             </div>
           </div>
           <div className="container">
            <h2>Your text Summery</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} Minutes to red</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview"}</p>
           </div>
        </>
    )
}
export default Form;