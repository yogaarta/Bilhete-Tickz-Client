import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Download, Printer } from 'react-bootstrap-icons';
import styles from '../../styles/Ticket.module.css';
import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn';
import Barcode from '../../assets/icon/barcode.png';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { getTicketAxios } from '../../modules/ticket';

export default function Ticket() {
   const [tiket, setTiket] = useState('');
   const router = useRouter();
   const { token } = useSelector((state) => state.auth.loginData);

   useEffect(() => {
      getTicketAxios(token)
         .then((result) => {
            setTiket(result.data.data.data[0]);
         })
         .catch((error) => {
            console.log(error);
         });
      if (!token) {
         router.push(
            {
               pathname: '/auth/login',
               query: { msg: 'You need to login first!' },
            },
            '/auth/login'
         );
      }
   }, []);
   return (
      <>
         <LayoutLoggedIn title={'Ticket'}>
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
                           <div className={styles.value}>{tiket.name || 'Name not found'}</div>
                        </div>
                        <div className={styles.ticketInfo}>
                           <div className={styles.row}>
                              <div className={styles.info}>
                                 <div className={styles.title}>Date</div>
                                 <div className={styles.value}>07 Apr</div>
                              </div>
                              <div className={styles.info}>
                                 <div className={styles.title}>Time</div>
                                 <div className={styles.value}>{tiket.time || 'Time not found'}</div>
                              </div>
                              <div className={styles.info}>
                                 <div className={styles.title}>Category</div>
                                 <div className={styles.value}>{(tiket.category && tiket.category.substring(0, 7) + '...') || 'Category not found'}</div>
                              </div>
                           </div>
                           <div className={styles.row}>
                              <div className={styles.info}>
                                 <div className={styles.title}>Count</div>
                                 <div className={styles.value}>{tiket.quantity || 'Quantity not found'}</div>
                              </div>
                              <div className={styles.info}>
                                 <div className={styles.title}>Seats</div>
                                 <div className={styles.value}>{tiket.seat || 'Seat not found'}</div>
                              </div>
                              <div className={styles.info}>
                                 <div className={styles.title}>Price</div>
                                 <div className={styles.valuePrice}>{tiket.total || 'Total not found'}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={styles.rightTicket}>
                        <div className={styles.header}>Bilhete Tickz</div>
                        <div className={styles.rightInfo}>
                           <div className={styles.movieRightContainer}>
                              <div className={styles.movieTitleRight}>
                                 <div className={styles.title}>Movie</div>
                                 <div className={styles.value}>{tiket.name || 'Time not found'}</div>
                              </div>
                              <div className={styles.ticketInfoRight}>
                                 <div className={styles.row}>
                                    <div className={styles.info}>
                                       <div className={styles.title}>Date</div>
                                       <div className={styles.value}>07 July</div>
                                    </div>
                                    <div className={styles.info}>
                                       <div className={styles.title}>Time</div>
                                       <div className={styles.value}>{tiket.time || 'Time not found'}</div>
                                    </div>
                                 </div>
                                 <div className={styles.row}>
                                    <div className={styles.info}>
                                       <div className={styles.title}>Count</div>
                                       <div className={styles.value}>{tiket.quantity || 'Quantity not found'}</div>
                                    </div>
                                    <div className={styles.info}>
                                       <div className={styles.title}>Category</div>
                                       <div className={styles.value}>{(tiket.category && tiket.category.substring(0, 5) + '...') || 'Category not found'}</div>
                                    </div>
                                 </div>
                                 <div className={styles.rowSeat}>
                                    <div className={styles.infoSeat}>
                                       <div className={styles.title}>Seats</div>
                                       <div className={styles.value}>{tiket.seat || 'Seat not found'}</div>
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
                     <div className={styles.button}>
                        <Download /> Download
                     </div>
                     <div className={styles.button}>
                        <Printer /> Print
                     </div>
                  </div>
               </section>
            </main>
         </LayoutLoggedIn>
      </>
   );
}
