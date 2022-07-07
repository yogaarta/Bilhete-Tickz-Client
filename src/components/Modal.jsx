import { Modal, Button } from 'react-bootstrap'
import React from 'react'

export default function Modal({show, setShow, title, body, secondButton, primeButton, primeButtonHandler}) {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}>
      <Modal.Header closeButton className={styles.modalHeader}>
        {title}
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          {secondButton}
        </Button>
        <Button variant="primary" className={styles.modalPrimaryButton}
          onClick={primeButtonHandler}>
          {primeButton}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
