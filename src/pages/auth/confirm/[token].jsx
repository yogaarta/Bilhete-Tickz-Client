import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



function ConfirmEmail() {
  const [msg, setMsg] = useState('')
  const router = useRouter()
  const { token } = router.query
  console.log(token)

  const confirmEmailHandler = async () => {
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/confirm/${token}`)
      setMsg('success')
      // router.push({
      //   pathname: '/auth/login',
      //   query: { msg: result.message }
      // })
    } catch (error) {
      setMsg('Verification failed, please try again')
      // router.push({
      //   pathname: '/auth/login',
      //   query: { msg: 'Verification failed, please try again' }
      // })
    }
  }

  useEffect(() => {
    confirmEmailHandler()
    if(msg === 'success')
    router.push({
      pathname: '/auth/login',
      query: { msg }
    })
  }, [msg])
  
  // return router.push({
  //   pathname: '/auth/login',
  //   query: { msg }
  // })
  // (
  //   <div>ConfirmEmail</div>
  // )
}

// export async function getStaticPaths() {
//   // const router = useRouter()
//   const { token } = router.query
//   return {
//     paths: [
//       { params: { token } }
//     ],
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   return { props: { token }, }
// }


export default ConfirmEmail