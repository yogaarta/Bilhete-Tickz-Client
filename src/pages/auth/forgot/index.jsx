import axios from 'axios';
import { useState } from 'react';
import CustomModal from '../../../components/CustomModal';
import LayoutAuth from '../../../components/LayoutAuth';
import Loading from '../../../components/Loading';
import styles from '../../../styles/Auth.module.css';

export default function Forgot() {
   const [email, setEmail] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState(null)
   const [msg, setMsg] = useState('')
   const [show, setShow] = useState(false)

   const activateHandler = async () => {
      try {
         setIsLoading(true)
         const result = await axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/forgot-password/${email}`)
         console.log(result)
         setMsg(result.data.message)
         setShow(true)
         // setMsg(result.data)
         setIsLoading(false)
      } catch (error) {
         console.log(error)
         setIsLoading(false)
      }
   }

   return (
      <>
         {isLoading && <Loading />}
         <LayoutAuth title={'Forgot Password'}>
            <div className={styles.maincontainer}>
               <h1 className={styles.titleforgot}>Fill your complete email</h1>
               <p>we'll send a link to your email shortly</p>
               <div className={styles.signupfrom}>
                  <h5 className={styles.email}>Email</h5>
                  <div className={styles.inputname}>
                     <input type="text" id="email" placeholder="Write your email" onChange={e => setEmail(e.target.value)} />
                  </div>
                  <button className={styles.forgotbutton} onClick={activateHandler}>Active Now</button>
               </div>
            </div>
         </LayoutAuth>
         <CustomModal show={show} setShow={setShow} title={isError ? 'Error' : 'Success'} body={msg} primeButtonHandler={()=>setShow(false)}/>
      </>
   );
}
