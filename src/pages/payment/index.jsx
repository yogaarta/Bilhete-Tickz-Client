import React from 'react'

import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn'
import styles from '../../styles/Payment.module.css'

export default function Payment() {
  return (
    <>
      <LayoutLoggedIn title={"Payment"}>
        <main className={styles.mainContainer}>
          <div className="leftPart">
            <section className="paymentInfo">
            </section>
            <section className="paymentMethod">
            </section>
          </div>
          <div className="rightPart">
            
          </div>
        </main>
      </LayoutLoggedIn>
    </>
  )
}
