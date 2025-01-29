import { useState } from "react"

// export default function Nav(props) {
export default function Nav() {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
    }

    const handleonchange = (event) => {
        console.log("on change")
        settext(event.target.value)
    } 

    const [text, settext] = useState('Enter here')

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <h1>{props.title}</h1> */}
                    <a className="navbar-brand" href="/">TextUtiles</a>
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/">About</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="m m-2">Enter the text to analyze below</h1>

                <div className="form-floating">
                    <textarea className="form-control" onChange={handleonchange} value={text} rows="8" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea" ></label>
                </div>
                <button className="btn btn-outline-success my-3" onClick={handleupclick} type="submit">Convert</button>
      </div>
      <div className="container my-3">
        <h1>Your test summary</h1>
        <p>3432 words and 454545 char</p>
      </div>
        </>
    )
}

