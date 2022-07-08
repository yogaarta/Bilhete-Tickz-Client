import styles from '../../../styles/Auth.module.css';
import { Eye, EyeSlashFill, Facebook, Google } from 'react-bootstrap-icons';
import { useState } from 'react';
import LayoutAuth from '../../../components/LayoutAuth';
import axios from 'axios';
import Link from 'next/link';

export default function Register() {
   const [showPass, setShowPass] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msgSuccess, setMsgSuccess] = useState('');
   const [msgError, setMsgError] = useState('');

   const register = async () => {
      try {
         const body = {
            email,
            password,
         };
         const result = await axios.post(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/new`, body);
         setMsgSuccess(result.data.data.msg);
         // console.log(result.data.data.msg);
      } catch (error) {
         console.log(error.response.data.message.msg);
         setMsgError(error.response.data?.message.msg);
      }
   };

   return (
      <>
         <LayoutAuth title={'Sign Up'}>
            <div className={styles.maincontainer}>
               <h3 className={styles.title}>Fill your additional details</h3>
               <div className={styles.signupfrom}>
                  <h5>Email</h5>
                  <div className={styles.inputname}>
                     <input
                        type="text"
                        id="email"
                        placeholder="Write your email"
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                     />
                  </div>
                  <h5>Password</h5>
                  <div className={styles.inputname}>
                     <div className={styles.password}>
                        <input
                           type={`${showPass ? 'text' : 'password'}`}
                           id="password"
                           placeholder="Write your password"
                           onChange={(e) => {
                              setPassword(e.target.value);
                           }}
                        />
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
                  <button className={styles.signupbutton} onClick={register}>
                     Join for free now
                  </button>
                  <div className={styles.infosignup}>
                     <p>
                        Do you already have an account?{' '}
                        <Link href="/auth/login">
                           <span className={styles.login}>Log in</span>
                        </Link>
                     </p>
                     <p>Or</p>
                  </div>
                  <div className={styles.buttonGoogleFb}>
                     <div>
                        <div className={styles.google}>
                           <Google /> Google
                        </div>
                     </div>
                     <div></div>
                     <div>
                        <div className={styles.facebook}>
                           <Facebook /> Facebook
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </LayoutAuth>
      </>
   );
}
