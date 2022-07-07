import React from 'react'
import Image from 'next/image'

import { Download, Printer } from 'react-bootstrap-icons'
import styles from '../../styles/Ticket.module.css'
import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn'
import Barcode from '../../assets/icon/barcode.png'

export default function Ticket() {
  return (
    <>
      <LayoutLoggedIn title={"Ticket"}>
        <main className={styles.mainContainer}>
          <section className={styles.card}>
            <div className={styles.title}>Proof of Payment</div>
            <div className={styles.ticketContainer}>
              <div className={styles.leftTicket}>
                <div className={styles.header}>
                  <div className={styles.logo}>Bilhete Tickz</div>
                  <div className={styles.admit}>Admit One</div>
                </div>
                <div className={styles.movieTitle}>
                  <div className={styles.title}>Movie</div>
                  <div className={styles.value}>Spider-Man: Homecoming</div>
                </div>
                <div className={styles.ticketInfo}>
                  <div className={styles.row}>
                    <div className={styles.info}>
                      <div className={styles.title}>Date</div>
                      <div className={styles.value}>07 July</div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>Time</div>
                      <div className={styles.value}>02:00pm</div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>Category</div>
                      <div className={styles.value}>PG-13</div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.info}>
                      <div className={styles.title}>Count</div>
                      <div className={styles.value}>3 pieces</div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>Seats</div>
                      <div className={styles.value}>C4, C5, C6</div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>Price</div>
                      <div className={styles.valuePrice}>$30.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightTicket}>
                <div className={styles.header}>
                  Bilhete Tickz
                </div>
                <div className={styles.rightInfo}>
                  <div className={styles.movieRightContainer}>
                    <div className={styles.movieTitleRight}>
                      <div className={styles.title}>Movie</div>
                      <div className={styles.value}>{('Spider-Man: Homecoming').substring(0, 15) + ('...')}</div>
                    </div>
                    <div className={styles.ticketInfoRight}>
                      <div className={styles.row}>
                        <div className={styles.info}>
                          <div className={styles.title}>Date</div>
                          <div className={styles.value}>07 July</div>
                        </div>
                        <div className={styles.info}>
                          <div className={styles.title}>Time</div>
                          <div className={styles.value}>02:00pm</div>
                        </div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.info}>
                          <div className={styles.title}>Count</div>
                          <div className={styles.value}>3 pcs</div>
                        </div>
                        <div className={styles.info}>
                          <div className={styles.title}>Category</div>
                          <div className={styles.value}>PG-13</div>
                        </div>
                      </div>
                      <div className={styles.rowSeat}>
                        <div className={styles.infoSeat}>
                          <div className={styles.title}>Seats</div>
                          <div className={styles.value}>C4, C5, C6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.barcodeContainer}>
                    <Image src={Barcode} width={'50px'} height={'50px'} className={styles.barcode} />
                    <Image src={Barcode} width={'50px'} height={'50px'} className={styles.barcode} />
                    <Image src={Barcode} width={'50px'} height={'50px'} className={styles.barcode} />
                    <Image src={Barcode} width={'50px'} height={'50px'} className={styles.barcode} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.button}><Download /> Download</div>
              <div className={styles.button}><Printer /> Print</div>
            </div>
          </section>
        </main>
      </LayoutLoggedIn>
    </>
  )
}
