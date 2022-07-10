import React, { useEffect } from 'react'
import Image from 'next/image'

import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn'
import styles from '../../styles/Payment.module.css'

import Gpay from '../../assets/icon/gpay.png'
import Visa from '../../assets/icon/visa.png'
import Gopay from '../../assets/icon/gopay.png'
import Paypal from '../../assets/icon/paypal.png'
import Dana from '../../assets/icon/dana.png'
import Bca from '../../assets/icon/bca.png'
import Bri from '../../assets/icon/bri.png'
import Ovo from '../../assets/icon/ovo.png'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function Payment() {
  const router = useRouter()
  const { token } = useSelector(state => state.auth.loginData)

  useEffect(() => {
    if (!token) {
      router.push({
        pathname: '/auth/login',
        query: { msg: 'You need to login first!' }
      }, '/auth/login')
    }
  }, [])
  return (
    <>
      <LayoutLoggedIn title={"Payment"}>
        <main className={styles.mainContainer}>
          <div className={styles.leftPart}>
            <section className={styles.paymentInfo}>
              <div className={styles.title}>Payment Info</div>
              <div className={styles.card}>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Date {'&'} time</div>
                  <div className={styles.value}>Tuesday, 07 July 2020 at 02:00pm</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Movie title</div>
                  <div className={styles.value}>Spider-Man: Homecoming</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Cinema name</div>
                  <div className={styles.value}>CineOne21 Cinema</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Number of tickets</div>
                  <div className={styles.value}>3 pieces</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Total payment</div>
                  <div className={styles.value}>$30,00</div>
                </div>
              </div>
            </section>
            <section className={styles.paymentMethod}>
              <div className={styles.title}>
                Choose a Payment Method
              </div>
              <div className={`${styles.card}`}>
                <div className={styles.cardRow}>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Gpay} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Visa} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Gopay} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Paypal} className={styles.methodImg} />
                  </div>
                </div>
                <div className={styles.cardRow}>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Dana} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Bca} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Bri} className={styles.methodImg} />
                  </div>
                  <div className={`${styles.paymentCard}`}>
                    <Image src={Ovo} className={styles.methodImg} />
                  </div>
                </div>
                <div className={styles.or}>
                  <div className={styles.borderLine}></div>or<div className={styles.borderLine}></div>
                </div>
                <div className={styles.payCash}>
                  Pay via cash.<span> See how it work</span>
                </div>
              </div>
            </section>
            <section className={styles.buttonContainer}>
              <div className={styles.prevStep}>Previous step</div>
              <div className={styles.payButton}>Pay your order</div>
            </section>
          </div>
          <div className={styles.rightPart}>
            <section className={styles.personalInfo}>
              <div className={styles.title}>Personal Info</div>
              <div className={styles.card}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                  <input type="text" name='name' id='name' placeholder='Input Full Name' className={styles.input} />
                </label>
                <label htmlFor="email" className={styles.label}>
                  Email
                  <input type="text" name='email' id='email' placeholder='Input Email' className={styles.input} />
                </label>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                  <div className={styles.numberContainer}>
                    +62
                    <div className={styles.verBorder}></div>
                    <input type="text" name='phone' id='phone' placeholder='Input Phone Number' className={styles.inputNumber} />
                  </div>
                </label>
              </div>
            </section>
          </div>
        </main>
      </LayoutLoggedIn>
    </>
  )
}
