const Select = ({options = [],onSelect}) =>{

    const handelSelect =  (e) => {
        onSelect(e.target.value)
    }

    return (
        <select onChange = {handelSelect} className="select">
            {options.map((elemento)=> <option value = {elemento.value}>{elemento.text}</option>)}
        </select>
    )
}

export default Select;