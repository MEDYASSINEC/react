function FormElement ( {type, name, label, value, setRef} ) {
    return (
        <div className="form-group">
            <label htmlFor={name} className="label">{label}:</label>
            <input type={type} name={name} id={name} defaultValue={value} ref={setRef} />
        </div>
    )
}

export default FormElement;