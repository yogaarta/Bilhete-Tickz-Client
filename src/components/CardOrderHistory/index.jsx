//Import from Package
import { ChevronDown } from 'react-bootstrap-icons';
//CssModule
import styles from '../../styles/Profile.module.css';
//Assets
import Ebu from '../../assets/icon/ebu.png';
//Compenents Next
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { getPaymentHistory } from '../../modules/payment';
import { useEffect } from 'react';

const CardOrderHistory = () => {
   const { token } = useSelector((state) => state.auth.loginData);

   useEffect(() => {
      getPaymentHistory(token)
         .then((result) => console.log(result))
         .catch((error) => console.log(error));
   }, []);

   return (
      <>
         <div className={styles.cardOrder}>
            <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
               <div className="col-md-6">
                  <div>
                     <p>Tuesday, 07 July 2020 - 04:30pm</p>
                     <h4>Spider-Man: Homecoming</h4>
                  </div>
               </div>
               <div className="col-md-3">
                  <div>
                     <Image src={Ebu} alt="abv" />
                  </div>
               </div>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-4">
               <div className="col-md-6">
                  <div>
                     <button className={styles.buttonActive}>Ticket in Active</button>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className={`position-relative ${styles.ShowDetails}`}>
                     <p>
                        Show Details <ChevronDown />
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CardOrderHistory;
