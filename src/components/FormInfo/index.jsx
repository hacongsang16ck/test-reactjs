import React, { useState } from 'react';
import '../../App.scss';
import Button from '../Button';
import Field from '../Field';
import TextAreaField from '../TextAreaField';


function FormInfo(props) {
    const [displayStyle,setDisplayStyle] = useState({display: 'none'});
    const [displayStyleOpp,setDisplayStyleOpp] = useState({display: ''});
    const [styleSave,setStyleSave] = useState({display: 'none'});
    const [styleEdit,setStyleEdit] = useState({display: ''});
    
    const [name,setName] = useState(()=>{
        const initValue = localStorage.getItem('value_name') || 'John Wick';
        return initValue;
    })
    const [email,setEmail] = useState(()=>{
        const initValue = localStorage.getItem('value_email') || 'donottake@mydog.com';
        return initValue;
    })
    const [contact,setContact] = useState(()=>{
        const initValue = localStorage.getItem('value_contact') || '0123456789';
        return initValue;
    })
    const [note,setNote] = useState(()=>{
        const initValue = localStorage.getItem('value_note') || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return initValue;
    })


    function handleEdit(){
        setStyleEdit( {
            display:'none',
        });
        setStyleSave({
            display:'',
        });
        setDisplayStyle({
            display:'',
        });
        setDisplayStyleOpp({
            display:'none',
        });
    }

    function handleNameChange(formValues){
        setName(formValues.targetValue);
        localStorage.setItem('value_name',formValues.targetValue);
    }
    function handleEmailChange(formValues){
        setEmail(formValues.targetValue);
        localStorage.setItem('value_email',formValues.targetValue);
    }
    function handleContactChange(formValues){
        setContact(formValues.targetValue);
        localStorage.setItem('value_contact',formValues.targetValue);
    }
    function handleNoteChange(formValues){
        setNote(formValues.targetValue);
        localStorage.setItem('value_note',formValues.targetValue);
    }

    function handleSave(){
        setStyleEdit( {
            display:'',
        });
        setStyleSave({
            display:'none',
        });
        setDisplayStyle({
            display:'none',
        });
        setDisplayStyleOpp({
            display:'',
        });
        localStorage.setItem('value_name',name);
        localStorage.setItem('value_email',email);
        localStorage.setItem('value_contact',contact);
        localStorage.setItem('value_note',note);
    }
    

    return (
        <div className="section">
            <div className="wrapper">
                <form novalidate id="detailsForm" onSubmit={handleSave} onClick={handleEdit} >
                    <div className="grid">
                        <div className="grid__block">
                            
                            <Field 
                                name="Name*"
                                id="name"
                                nameValue={name}
                                nameRequired="Name is required"
                                displayStyle={displayStyle}
                                displayStyleOpp={displayStyleOpp}
                                onChange={handleNameChange}
                            />
                        </div>

                        <div className="grid__block">
                            <Field 
                                name="Email*"
                                id="email"
                                nameValue={email}
                                nameRequired="Email is required."
                                nameInvalid="E-mail Address is invalid."
                                displayStyle={displayStyle}
                                displayStyleOpp={displayStyleOpp}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="grid__block">
                            <Field 
                                name="Contact*"
                                id="contact"
                                nameValue={contact}
                                nameRequired="Contact Number is required."
                                nameInvalid="Contact Number should consist of 8 to 12 digits only."
                                displayStyle={displayStyle}
                                displayStyleOpp={displayStyleOpp}
                                onChange={handleContactChange}
                            />
                        </div>

                        <div className="grid__block">
                            <label>
                                <div className="field-label">
                                    Gender*
                                </div>

                                <div className="field-value" style={displayStyleOpp}>
                                    Male
                                </div>

                                <select className="field" name="gender" style={displayStyle} id="gender">
                                    <option value="">- Select -</option>
                                    <option value="1" selected>Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                    <option value="4">I do not wish to say</option>
                                </select>

                                <div className="field-error" id="genderRequired">
                                    Gender is required.
                                </div>
                            </label>
                        </div>

                        <div className="grid__block full--">
                            <TextAreaField
                                name="Note*"
                                nameValue={note}
                                id="note"
                                nameRequired="Notes is required."
                                displayStyle={displayStyle}
                                displayStyleOpp={displayStyleOpp}
                                onChange={handleNoteChange}
                            />
                        </div>

                        <div className="grid__block full-- ta-c">
                            <Button />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormInfo;