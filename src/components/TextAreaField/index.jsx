import React from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';


TextAreaField.propTypes = {
    onChange:PropTypes.func,
    
};
TextAreaField.defaultProps={
    onChange:null,
}

function TextAreaField(props) {

    const {onChange,nameValue, nameRequired, id, name,displayStyle,displayStyleOpp} = props;

    function handleValueChange(e){
        const term = e.target.value;
        
        if(!onChange) return;
        
        const formValues = {
            targetValue: term,
        }
        onChange(formValues);
    }

    return (
        <label>
            <div className="field-label">
                {name}
            </div>
            <div className="field-value" style={displayStyleOpp}>
                {nameValue}
            </div>
            <textarea
                type="text"
                className="field"
                name={id}
                style={displayStyle}
                id={id}
                onChange={handleValueChange}
            >
                {nameValue}
            </textarea>
            <div
                className="field-error"
                id={id+'Required'}
            >
                {nameRequired}
            </div>
        </label>
    );
}

export default TextAreaField;