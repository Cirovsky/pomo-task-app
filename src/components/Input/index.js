import "./Input.css";

const Input = ({name, type, placeholder, value, required, setValue}) =>{

    /* const aoDigitar = (e)=>{
        props.aoAlterar(e.target.value);
    } */
    return(
        <fieldset className="input">
            <label name={name} htmlFor={name}>{name}: </label>
            <input 
                value={value} 
                type={type} 
                id={name} 
                placeholder={placeholder} 
                onChange={e => setValue(e.target.value)}
                required={required}
            />
        </fieldset>
        
    )
}
export default Input;