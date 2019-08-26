import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps }/>
        {
            // if there is a label : 
            label ?
            (<label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>)
            //otherwise null :
            : null
        }
    </div>
);

export default FormInput;