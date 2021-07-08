import React from 'react'

function InputField(props) {
    const inputType = props.inputType || 'text';
    const isRequired = Boolean(props.isRequired);
    return (
        <label>
            {props.title || ""}
            {
                props.inputType === "textarea" ?
                <textarea name={props.name}  required={isRequired} onChange={props.onChange}></textarea>:
                <input type={inputType} name={props.name} required={isRequired} onChange={props.onChange} />
            }
        </label>
    );
}

export default InputField;