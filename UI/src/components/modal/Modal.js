import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.scss';

function Modal(props) {
    return (
        <Popup trigger={props.trigger} position="center center" modal>
            <div className="modal"> 
                {props.children}
            </div>   
        </Popup>
    );
}

export default Modal;