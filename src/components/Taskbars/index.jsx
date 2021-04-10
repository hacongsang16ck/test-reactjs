import React from 'react';
import PropTypes from 'prop-types';
import './Taskbars.scss';
import photo from '../../assets/images/logo.svg'

Taskbars.propTypes = {
    
};

function Taskbars(props) {
    return (
        <div className="App-header">
            <div className="wrapper">
                <img src={photo} alt="" className="images-logo"/>
                Sample HTML Project
            </div>
        </div>
    );
}

export default Taskbars;