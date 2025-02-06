import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Nav(props) {
    // export default function Nav() {

    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
                <div className="container-fluid">
                    {/* <h1>{props.title}</h1> */}

                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'}`}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
                        </div>
                    </div>
                </div>
            </nav>


        </>

    )

}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    togglemode: PropTypes.func.isRequired
}

// Nav.defaultProps = {
//     title: "Default Title",
//     aboutText: "Default About Text"
// };
