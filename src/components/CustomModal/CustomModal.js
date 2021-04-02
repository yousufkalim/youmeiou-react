import React, {useState, useEffect} from 'react';
import {Modal, Button} from "react-bootstrap";

const CustomModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        // props.setShowModal(props.show);
        // props.setShowModal(props.show)
    };
    // const handleShow = () => setShow(props.show);

    useEffect(() => {
        // setShow(props.show);
        // handleShow();
    },[])

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CustomModal
