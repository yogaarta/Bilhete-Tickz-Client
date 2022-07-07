import LayoutAuth from '../../../components/LayoutAuth';
import styles from '../../../styles/Auth.module.css';

export default function Forgot() {
   return (
      <>
         <LayoutAuth title={'Forgot Password'}>
            <div className={styles.maincontainer}>
               <h1 className={styles.titleforgot}>Fill your complete email</h1>
               <p>we'll send a link to your email shortly</p>
               <div className={styles.signupfrom}>
                  <h5 className={styles.email}>Email</h5>
                  <div className={styles.inputname}>
                     <input type="text" id="email" placeholder="Write your email" />
                  </div>
                  <button className={styles.forgotbutton}>Active Now</button>
               </div>
            </div>
         </LayoutAuth>
      </>
   );
}
