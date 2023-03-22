import "./Button.css";

const Button = (props) =>{
    const onEvent = e=>{
        return props.clickEvent? props.clickEvent(e.target) : null;
    }
    
    return(
        <button className={`${props.className? props.className : " "}`}
            onClick={(e) => onEvent(e)}
        >
            {props.children}
        </button>
    );
}
export default Button;
