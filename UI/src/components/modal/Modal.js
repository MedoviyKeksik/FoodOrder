import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.scss';
import PropTypes from 'prop-types';

function Modal(props) {
    return (
        <Popup trigger={props.trigger} position="center center" modal>
            <div className="modal"> 
                {props.children}
            </div>   
        </Popup>
    );
}

Modal.propTypes = {
    trigger: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;