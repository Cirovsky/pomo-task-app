import "./InputSelect.css";

const InputSelect = ({name, options, value, required, setValue}) =>{

    /* const aoDigitar = (e)=>{
        props.aoAlterar(e.target.value);
    } */

    const optionsItems = options.map(item => <option key={item}>{item}</option>)
    return(
        <fieldset className="input">
            <label name={name} htmlFor={name}>{name}: </label>
            <select value={value} required={required} onChange={e => setValue(e.target.value)}>
                {optionsItems}
            </select>
        </fieldset>
        
    )
}
export default InputSelect;