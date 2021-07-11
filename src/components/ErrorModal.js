import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function ErrorModal({isError, errorMsg}) {
    const [smShow, setSmShow] = useState(isError);

    <Button onClick={() => setSmShow(true)}>Small modal</Button>

    return (
        <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h3>Error</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-a"><h4>{errorMsg}</h4></Modal.Body>
      </Modal>
    );
}