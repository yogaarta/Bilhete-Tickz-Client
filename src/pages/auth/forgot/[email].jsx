import { useState } from 'react';
import LayoutAuth from '../../../components/LayoutAuth';
import styles from '../../../styles/Auth.module.css';
import { Eye, EyeSlashFill, Facebook, Google } from 'react-bootstrap-icons';
import Loading from '../../../components/Loading';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CustomModal from '../../../components/CustomModal';

export default function EditPass() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(null)

  const router = useRouter()
  const resetHandler = async () => {
    try {
      setIsLoading(true)
      setIsError(null)
      setMsg('')
      const { email } = router.query
      const body = { email, newPassword: password, confirmCode: code }
      const result = await axios.patch(`${process.env.NEXT_PUBLIC_BE_HOST}/users/edit-password`, body)
      // setMsg(result)
      console.log(result)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
      setMsg('Wrong Confirmation Code')
      // console.log(error)
      setShow(true)
      setIsLoading(false)
    }
  }

  const primeButtonHandler = () => {
    router.push('/auth/login')
  }

  useEffect(() => {
    setActiveButton(password === password2 && password && code)
  }, [password, password2, code])

  return (
    <>
      {isLoading && <Loading />}
      <LayoutAuth title={'Forgot Password'} step={3}>
        <div className={styles.maincontainer}>
          <h1 className={styles.titleforgot}>Enter your new password</h1>
          <div className={styles.signupfrom}>
            <h5 className={styles.email}>Password</h5>
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
            <h5 className={styles.confirm}>Confirm Password</h5>
            <div className={styles.inputname}>
              <div className={styles.password}>
                <input
                  type={`${showPass2 ? 'text' : 'password'}`}
                  id="password"
                  placeholder="Write your password"
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
                <div
                  className={styles.showpassword}
                  value={showPass}
                  onClick={() => {
                    setShowPass2(!showPass2);
                  }}
                >
                  {showPass2 ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                </div>
              </div>
            </div>
            <h5>Confirmation Code</h5>
            <div className={styles.inputname}>
              <input
                type="text"
                id="email"
                placeholder="Write your email"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
            {activeButton ?
              <button className={styles.forgotbutton2} onClick={resetHandler}>Reset Password</button>
              :
              <button className={styles.disforgotbutton2}>Reset Password</button>
            }
          </div>
        </div>
      </LayoutAuth>
      <CustomModal show={show} setShow={setShow} title={isError ? 'Error' : 'Success'} body={msg} primeButton={'Login'} primeButtonHandler={primeButtonHandler} />
    </>
  );
}
