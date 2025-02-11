/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";


export default function Textform(props) {
  
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showalert("converted to uppercase","success");

    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showalert("converted to lowercase","success");

    }

    const handleonchange = (event) => {
        console.log("on change")
        settext(event.target.value)
    }

    const cleartextclick = () => {
        let newtext = " "
        settext(newtext)
    }

    const handleCopy = () => {
        let text = document.getElementById("floatingTextarea");
        text.select(); 
        navigator.clipboard.writeText(text.value); 
        document.getSelection().removeAllRanges();
        props.showalert("Text Copied", "success");
    };
    

    const [text, settext] = useState('')



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="m mb-4 my-2">{props.heading}</h1>
                
                <div className="form-floating ">
                    <textarea className="form-control" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', height: "200px", color: props.mode === 'dark' ? 'white' : 'black' }} value={text} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea"></label>
                </div>
                <button disabled={text.length ===0} className="btn btn-outline-success my-3 mx-3" onClick={handleupclick} type="submit">To Uppercase</button>
                <button disabled={text.length ===0} className="btn btn-outline-success my-3 mx-3" onClick={handleloclick} type="submit">To lowercase</button>
                <button disabled={text.length ===0} className="btn btn-outline-success my-3 mx-3" onClick={cleartextclick} type="submit">Clear text</button>
                <button disabled={text.length ===0} className="btn btn-outline-success my-3 mx-3" onClick={handleCopy} type="submit">Copy text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your test summary</h1>
                {/* <p>3432 words and 454545 char</p> */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
                <p>Read Time : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    mode: PropTypes.string.isRequired
};