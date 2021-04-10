import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';

Button.propTypes = {
    onSubmit:PropTypes.func,
};
Button.defaultProps={
    onSubmit : null,
}



function Button(props) {

    const {onSubmit} = props;
    const [styleSave,setStyleSave] = useState({display: 'none'});
    const [styleEdit,setStyleEdit] = useState({display: ''});
    
    function handleEditChange(){
        setStyleEdit( {
            display:'none',
        })
        setStyleSave({
            display:'',
        })
    }

    function handleSave(){
        setStyleEdit( {
            display:'',
        })
        setStyleSave({
            display:'none',
        })
    }

    return (
        <div>
            <button 
                type="button"
                className="button secondary--"
                id="edit"
                onClick = {handleEditChange}
                style={styleEdit}
                >
                Edit
            </button>

            <button
                type="submit"
                className="button"
                id="submit"
                style={styleSave}
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
}

export default Button;