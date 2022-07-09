import { Modal, Button } from 'react-bootstrap'
import React from 'react'
import styles from './CustomModal.module.css'

export default function CustomModal({ show, setShow, title, body, secondButton, isSecondButton = true, primeButton, primeButtonHandler, isError, isLogout = false }) {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}>
      <Modal.Header closeButton className={`${styles.modalHeader} ${isError ? styles.error : styles.success}`}>
        {title}
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {isSecondButton ?
          <Button variant="secondary" onClick={() => setShow(false)}>
            {secondButton ? secondButton : "Cancel"}
          </Button>
          :
          <></>
        }
        {isError ?
          <></>
          :
          <Button variant="primary" className={styles.modalPrimaryButton}
            onClick={primeButtonHandler}>
            {primeButton ? primeButton : "Proceed"}
          </Button>
        }
        {isLogout ?
          <>
            <Button variant="primary" className={styles.modalPrimaryButton}
              onClick={primeButtonHandler}>
              {primeButton ? primeButton : "Proceed"}
            </Button>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
          </>
          :
          <></>
        }
      </Modal.Footer>
    </Modal>
  )
}
