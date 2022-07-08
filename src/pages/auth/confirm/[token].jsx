import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import LayoutAuth from '../../../components/LayoutAuth'
import styles from '../../../styles/Confirm.module.css';
import Loading from '../../../components/Loading'


function ConfirmEmail() {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const router = useRouter()
  const { token } = router.query
  console.log(token)

  const confirmEmailHandler = async () => {
    try {
      setIsLoading(true)
      const result = await axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/confirm/${token}`)
      console.log(result)
      setMsg('success')
      setIsError(false)
      setIsLoading(false)
      // router.push({
      //   pathname: '/auth/login',
      //   query: { msg: result.message }
      // })
    } catch (error) {
      console.log(error)
      setMsg('Verification failed, please try again')
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // confirmEmailHandler()
    if (isError === false)
      router.push({
        pathname: '/auth/login',
        query: { msg }
      })
  }, [isError])
  console.log(msg)
  return (
    <>
    {isLoading && <Loading />}
      <LayoutAuth title={'Confirm'} step={2}>
        <div className={styles.maincontainer}>
          <h3 className={styles.title}>Activate Your Account</h3>
          <div className={styles.signupfrom}>
            <button className={styles.signupbutton} onClick={confirmEmailHandler}>
              Activate Account
            </button>
          </div>
        </div>
      </LayoutAuth>
    </>
  )
}

export default ConfirmEmail