import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./popup.css";
const popup = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal className="landing-modal" fullscreen={props.fullscreen} show={show} onHide={handleClose}
   
    
    >
      <Card
        style={{
          padding: "4rem 2rem 5rem 2rem",
          borderRadius: "3.5rem",
          backgroundColor: "transparent",
          borderRadius : "3rem",
        }}
      >
        <div className="plan-card-heading">
          <div className="plan-card-heading"></div>
        </div>
        <div className="plan-card-detail">
          {props.children}
        </div>
      </Card>
      {/* <Modal.Header size="lg" closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button size="lg" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button size="lg" variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};
export default popup;
