import { useState } from "react";
import PropTypes from "prop-types";



export default function Textform(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
    }

    const handleonchange = (event) => {
        console.log("on change")
        settext(event.target.value)
    }

    const cleartextclick = () => {
        let newtext = " "
        settext(newtext)
    }

    const [text, settext] = useState('')



    return (
        <>
            <div className="container" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
                <h1 className="m m-2">Enter the text to analyze below</h1>

                <div className="form-floating ">
                    <textarea className="form-control" onChange={handleonchange} style={{backgroundColor: props.mode ==='dark' ? 'grey': 'white',height: "200px",color: props.mode ==='dark' ? 'white': 'black'}} value={text}  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea"></label>
                </div>
                <button className="btn btn-outline-success my-3 mx-3" onClick={handleupclick} type="submit">To Uppercase</button>
                <button className="btn btn-outline-success my-3 mx-3" onClick={handleloclick} type="submit">To lowercase</button>
                <button className="btn btn-outline-success my-3 mx-3" onClick={cleartextclick} type="submit">Clear text</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
                <h1>Your test summary</h1>
                {/* <p>3432 words and 454545 char</p> */}
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>Read Time : {0.008 * text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    mode: PropTypes.string.isRequired
};