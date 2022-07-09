import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import LayoutAuth from '../../../components/LayoutAuth'
import styles from '../../../styles/Confirm.module.css';
import Loading from '../../../components/Loading'
import CustomModal from '../../../components/CustomModal'


function ConfirmEmail() {
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)
  const router = useRouter()
  const { token } = router.query
  console.log(token)

  const confirmEmailHandler = async () => {
    try {
      setIsLoading(true)
      const result = await axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/confirm/${token}`)
      console.log(result)
      setIsError(false)
      setMsg('Verification Success, Please Login')
      setShow(true)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsError(true)
      setMsg('Verification failed, please try again')
      setShow(true)
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   if (isError === false)
  //     setTimeout(() => {
  //       router.push({
  //         pathname: '/auth/login',
  //         query: { msg }
  //       })

  //     }, 2000)
  // }, [isError])
  console.log(msg)
  return (
    <>
      {isLoading && <Loading />}
      <LayoutAuth title={'Confirm'} step={2}>
        <div className={styles.maincontainer}>
          <h3 className={styles.title}>Activate Your Account</h3>
          <div className={styles.signupfrom}>
            {/* {isError ? <></> : <div className={styles.successMsg}>{msg}</div>} */}
            <button className={styles.signupbutton} onClick={confirmEmailHandler}>
              Activate Account
            </button>
          </div>
        </div>
      </LayoutAuth>
      <CustomModal show={show} setShow={setShow} title={isError ? 'Error' : 'Success'} body={msg} primeButton={'Login'} primeButtonHandler={()=>router.push('/auth/login')} isError={isError}/>
    </>
  )
}

export default ConfirmEmail