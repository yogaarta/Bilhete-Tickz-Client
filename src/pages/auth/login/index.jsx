import LayoutAuth from '../../../components/LayoutAuth';
import styles from '../../../styles/Auth.module.css';
import { Eye, EyeSlashFill, Facebook, Google } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { loginAction } from '../../../redux/actionCreator/login';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../../redux/actionCreator/users';


import Loading from '../../../components/Loading'
import { useEffect } from 'react';
import CustomModal from '../../../components/CustomModal';

export default function Login() {
   const [showPass, setShowPass] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msgError, setMsgError] = useState('');
   const [show, setShow] = useState(false);
   const [authShow, setAuthShow] = useState(false)
   const [loading, setLoading] = useState(false)
   const [buttonActive, setButtonActive] = useState(false)
   // const [isLoading, setIsLoading] = useState(false)

   const { loginData, isLoading, isError, msg } = useSelector(state => state.auth)
   // const { isLoadingUser = isLoading } = useSelector(state => state.userInfo)

   const router = useRouter();
   const dispatch = useDispatch();

   const login = async () => {
      const body = {
         email,
         password,
      };

      dispatch(loginAction(body))
      .then(result => {
         console.log(result)
         setShow(true)
      })
      .catch(error => {
         console.log(error)
         setMsgError(error.response?.data.message.msg);
         setShow(true)
      })
   };

   const primeButtonHandler = () => {
      setLoading(true)
      dispatch(getUsersAction(loginData.token))
      .then(result => {
         console.log(result)
         setLoading(false)
         setShow(false)
         router.push('/');
      })
      .catch(error => {
         console.log(error)
         setLoading(false)
      })
   };

   useEffect(() => {
      setButtonActive(email && password)
   }, [email, password])

   useEffect(() => {
      if(router.query.msg){
         setAuthShow(true)
      }
   }, [])
   

   return (
      <>
         {isLoading && <Loading />}
         {loading && <Loading />}
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
                  {buttonActive ? 
                  <button className={styles.signupbutton} onClick={login}>
                     Sign In
                  </button>
                     :
                  <button className={styles.dissignupbutton}>
                     Sign In
                  </button>
                     }
                  <div className={styles.infosignup}>
                     <p>
                        Do you already have an account?{' '}
                        <Link href="/auth/forgot">
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
         <CustomModal show={show} setShow={setShow} title={isError ? 'Error' : 'Success'} body={msg} primeButton={'Proceed'} primeButtonHandler={primeButtonHandler} isError={isError} isSecondButton={isError ? true : false}/>
         <CustomModal show={authShow} setShow={setAuthShow} title={'Error'} body={router.query.msg} secondButton={'OK'} isError={true} isSecondButton={true}/>
      </>
   );
}
