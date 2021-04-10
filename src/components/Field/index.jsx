import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';

Field.propTypes = {
    onChange:PropTypes.func,
    
};
Field.defaultProps={
    onChange:null,
}

function Field(props) {

    const {onChange,nameValue, nameRequired, nameInvalid, id, name,displayStyle,displayStyleOpp} = props;
    const [inputStyle,setInputStyle] = useState('field');
    const [requiedStyle,setRequiedStyle] = useState('field-error');
    const [invalidStyle,setInvalidStyle] = useState('field-error');
    function handleValueChange(e){
        const term = e.target.value;
        
        if(!onChange) return;
        if(!term){
            setInputStyle('field invalid--');
            setRequiedStyle('field-error active--');
        }else{
            setInputStyle('field')
            setRequiedStyle('field-error');
            if(id==='email' && term.includes('@') && requiedStyle==='field-error'){
                setInvalidStyle('field-error');
            }else{
                setInvalidStyle('field-error active--');
            }
            if(id==='contact' && term.includes('@')){
                setInvalidStyle('field-error');
            }else{
                setInvalidStyle('field-error active--');
            }
        }
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

            <input 
                type="text" 
                className={inputStyle}
                name={id} 
                value={nameValue} 
                style={displayStyle} 
                id={id} 
                onChange={handleValueChange}
                />

            <div className={requiedStyle} id={id+'Required'}>
                {nameRequired}
            </div>
            <div className={invalidStyle} id={id+'Invalid'}>
                {nameInvalid}
            </div>
        </label>
    );
}

export default Field;