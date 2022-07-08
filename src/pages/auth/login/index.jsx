import LayoutAuth from '../../../components/LayoutAuth';
import styles from '../../../styles/Auth.module.css';
import { Eye, EyeSlashFill, Facebook, Google } from 'react-bootstrap-icons';
import { useState } from 'react';
import Link from 'next/link';
import { loginAction } from '../../../redux/actionCreator/login';
import { useDispatch } from 'react-redux';

export default function Login() {
   const [showPass, setShowPass] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msgError, setMsgError] = useState('');

   const dispatch = useDispatch();

   const login = () => {
      const body = {
         email,
         password,
      };
      dispatch(loginAction(body))
         .then((_) => {
            // dispatch(getUsersAction());
         })
         .catch((error) => {
            setMsgError(error.response?.data.message.msg);
         });
   };

   return (
      <>
         <LayoutAuth title={'Sign In'}>
            <div className={styles.maincontainer}>
               <h1 className={styles.titlesign}>Sign In</h1>
               <p className={styles.desctitlelogin}>Sign in with your data that you entered during your registration</p>
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
                  <button className={styles.signupbutton} onClick={login}>
                     Sign In
                  </button>
                  <div className={styles.infosignup}>
                     <p>
                        Do you already have an account?{' '}
                        <Link href="/auth/forgot-password">
                           <span className={styles.login}>Reset Now</span>
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
