/* eslint-disable react/prop-types */

function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
           {props.alert &&  (<div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
               {capitalize(props.alert.typ)} : {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)}
        </div>
    )
}



export default Alert

