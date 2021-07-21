import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

function NeedAuthModal(props) {
    return (
        <Modal className={props.className} trigger={props.trigger} >
            <h3>Please authorize</h3>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Modal>
    );
}

export default NeedAuthModal;