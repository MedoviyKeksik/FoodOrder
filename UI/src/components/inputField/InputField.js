import React from 'react'
import { FormattedMessage } from 'react-intl';

function InputField(props) {
    const inputType = props.inputType || 'text';
    const isRequired = Boolean(props.isRequired);
    return (
        <label>
            <FormattedMessage defaultMessage={props.titleDefault} id={props.titleId} />
            {
                props.inputType === "textarea" ?
                <textarea name={props.name}  required={isRequired} onChange={props.onChange}></textarea>:
                <input type={inputType} name={props.name} required={isRequired} onChange={props.onChange} />
            }
        </label>
    );
}

export default InputField;