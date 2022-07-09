import styles from '../../../styles/Auth.module.css';
import { Eye, EyeSlashFill, Facebook, Google } from 'react-bootstrap-icons';
import { useState } from 'react';
import LayoutAuth from '../../../components/LayoutAuth';
import axios from 'axios';
import Link from 'next/link';
import CustomModal from '../../../components/CustomModal';
import { useRouter } from 'next/router';
import Loading from '../../../components/Loading'
import { useEffect } from 'react';

export default function Register() {
   const [showPass, setShowPass] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
   const [show, setShow] = useState(false);
   const [isError, setIsError] = useState(null);
   const [isLoading, setIsLoading] = useState(false)
   const [agree, setAgree] = useState(false)
   const [buttonActive, setButtonActive] = useState(false)

   const router = useRouter();

   const register = async () => {
      try {
         setIsLoading(true)
         setIsError(null);
         const body = { email, password };
         const result = await axios.post(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/new`, body);
         setIsError(false);
         setMsg(result.data.data.msg);
         setIsLoading(false)
         setShow(true);
         // console.log(result.data.data.msg);
      } catch (error) {
         // console.log(error.response.data.message.msg);
         setIsError(true);
         setMsg(error.response.data.message.msg);
         setShow(true);
         setIsLoading(false)
      }
   };

   const primeButtonHandler = () => {
      router.push('/auth/login');
   };

   useEffect(()=>{
      setButtonActive(email && password && agree)
   },[email, password, agree])

   return (
      <>
         {isLoading && <Loading />}
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
                     <input type="checkbox" id='agree' onClick={()=> setAgree(!agree)}/>
                     <label htmlFor='agree' className={styles.titlecheckbox}>I agree to terms & conditions</label>
                  </div>
                  {buttonActive ? 
                  <button className={styles.signupbutton} onClick={register}>
                     Join for free now
                  </button>
                  :
                  <button className={styles.dissignupbutton}>
                     Join for free now
                  </button>
                  }
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
         <CustomModal show={show} setShow={setShow} title={isError ? 'Error' : 'Success'} body={msg} primeButton={'Login'} primeButtonHandler={primeButtonHandler} isError={isError}/>
      </>
   );
}
