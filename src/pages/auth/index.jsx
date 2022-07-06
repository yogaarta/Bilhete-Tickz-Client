import styles from '../../styles/Auth.module.css';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import LayoutAuth from '../../components/LayoutAuth';

export default function Register() {
   const [showPass, setShowPass] = useState(false);

   return (
      <>
         <LayoutAuth>
            <div className={styles.maincontainer}>
               <h3 className={styles.title}>Fill your additional details</h3>
               <div className={styles.signupfrom}>
                  <h5>Email</h5>
                  <div className={styles.inputname}>
                     <input type="text" id="email" placeholder="Write your email" />
                  </div>
                  <h5>Password</h5>
                  <div className={styles.inputname}>
                     <div className={styles.password}>
                        <input type={`${showPass ? 'text' : 'password'}`} id="password" placeholder="Write your password" />
                        <div
                           className={styles.showpassword}
                           value={showPass}
                           onClick={() => {
                              setShowPass(!showPass);
                           }}
                        >
                           {showPass ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                        </div>
                     </div>
                  </div>
                  <div className={styles.checkbox}>
                     <input type="checkbox" />
                     <div className={styles.titlecheckbox}>I agree to terms & conditions</div>
                  </div>
                  <button className={styles.signupbutton}>Join for free now</button>
                  <div className={styles.infosignup}>
                     <p>Do you already have an account? Log in</p>
                     <p>Or</p>
                  </div>
                  <div className={styles.buttonGoogleFb}>
                     <div>
                        <div className={styles.google}>
                           <Eye />
                           Google
                        </div>
                     </div>
                     <div> </div>
                     <div>
                        <div className={styles.google}>
                           <Eye />
                           Facebook
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </LayoutAuth>
      </>
   );
}
