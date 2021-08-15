import React from 'react'
import './InputField.scss';
import PropTypes from 'prop-types';

function InputField(props) {
    const inputType = props.inputType || 'text';
    const isRequired = Boolean(props.isRequired);
    return (
        <label className="input-field">
            {props.label}
            <br />
            {
                props.inputType === "textarea" ?
                <textarea className="input-field__textarea" name={props.name}  required={isRequired} onChange={props.onChange}></textarea>:
                <input className="input-field__input" type={inputType} name={props.name} required={isRequired} onChange={props.onChange} />
            }
        </label>
    );
}

InputField.propTypes = {
    inputType: PropTypes.string,
    isRequired: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
}

export default InputField;