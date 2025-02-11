import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Nav(props) {
    // export default function Nav() {

    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
                <div className="container-fluid">
                    

                    <Link className="navbar-brand mx-5" to="/">{props.title}</Link>
                    <Link className="navbar-brand mx-5" to="/">Home</Link>
                    <Link className="navbar-brand mx-5" to="/about">About</Link>
                    <div className={`form-check mx-5 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
                        </div>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        </ul>
                        
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
