import { Modal, Button } from 'react-bootstrap'
import React from 'react'
import styles from './CustomModal.module.css'

export default function CustomModal({show, setShow, title, body, secondButton, primeButton, primeButtonHandler, isError}) {
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
          {secondButton ? secondButton : "Cancel"}
        </Button>
        <Button variant="primary" className={styles.modalPrimaryButton}
          onClick={primeButtonHandler}>
          {primeButton ? primeButton : "Proceed"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
