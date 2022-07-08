//Import from Package
import { ThreeDots } from 'react-bootstrap-icons';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../redux/actionCreator/users';
//ComponentsLocal
import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn';
//Compenents Next
import Image from 'next/image';
//CssModule
import styles from '../../styles/Profile.module.css';
//Assets
import Default from '../../assets/img/default.png';
import Star from '../../assets/img/star.png';
import Show from '../../assets/icon/show.png';
import Hide from '../../assets/icon/hide.png';
import CardOrderHistory from '../../components/CardOrderHistory';
import axios from 'axios';

const EditProfile = () => {
   const { firstname, lastname, email, phone_number, point, pictures } = useSelector((state) => state.userInfo.userInfo);
   const { token } = useSelector((state) => state.auth.loginData);
   const [showDrop, setShowDrop] = useState(false);
   const [active, setActive] = useState(false);
   const [showPass, setShowPass] = useState(false);
   const [showPassConfirm, setShowPassConfirm] = useState(false);
   const inputFile = useRef();

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUsersAction(token));
   }, []);

   const [form, setForm] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone_number: '',
      newPassword: '',
      confirmPassword: '',
      image: '',
   });

   const handleUpload = (e) => {
      const file = e.target.files[0];
      setForm({ ...form, image: file });
   };

   const updateForm = () => {
      const body = new FormData();
      body.append('pictures', form.image);
      body.append('firstname', form.firstname);
      body.append('lastname', form.lastname);
      body.append('phone_number', form.phone_number);
      body.append('newPassword', form.newPassword);
      body.append('confirmPassword', form.confirmPassword);
      return body;
   };

   const handleUpdate = async (e) => {
      e.preventDefault();
      try {
         const body = updateForm();
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.patch(`${process.env.NEXT_PUBLIC_BE_HOST}/users`, body, config);
         dispatch(getUsersAction(token));
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <LayoutLoggedIn title="Edit Profile">
         <div className={`${styles.profileContainer}`}>
            <form className="container d-flex flex-md-row flex-column gap-4 gap-md-0 justify-content-between" onSubmit={handleUpdate}>
               <div className="col-md-3">
                  <div className={`text-center ${styles.cardName}`}>
                     <div className="d-flex justify-content-between align-items-center">
                        <p className="pt-md-3">INFO</p>
                        <div className="position-relative">
                           <ThreeDots
                              onClick={() => {
                                 setShowDrop(!showDrop);
                              }}
                              className={styles.Threedots}
                           />
                           {showDrop ? (
                              <>
                                 <div
                                    onClick={() => {
                                       inputFile.current.click();
                                    }}
                                    className={styles.dropProfile}
                                 >
                                    Edit Photo
                                 </div>
                                 <input type="file" name="profile" hidden ref={inputFile} onChange={handleUpload} />
                              </>
                           ) : null}
                        </div>
                     </div>
                     <div className={styles.borderBottom}>
                        <Image src={pictures ? pictures : Default} width={'150px'} height={'150px'} alt="default" />
                        <h6 className="fw-bold">
                           {firstname || email} {lastname}
                        </h6>
                        <p>Movigoers</p>
                     </div>
                     <div className="text-start mt-md-4 py-4">
                        <h6>Loyality Points</h6>
                        <div className={`text-center mt-md-4 ${styles.cardMember}`}>
                           <div className="d-flex align-items-center justify-content-between gap-3  text-white px-5">
                              <p className="col-md-5">Moviegoers</p>
                              <div className="col-md-2">
                                 <Image src={Star} alt="cardMember" />
                              </div>
                           </div>
                           <div className="text-white text-start px-5 mt-1">
                              <p>
                                 {point || 0} <span>points</span>{' '}
                              </p>
                           </div>
                        </div>
                        <p className="text-center mt-md-4">{point || 0} point become a master</p>
                        <div className={styles.cardLoadContainer}>
                           <div className={styles.cardLoad}></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className={styles.cardEditHeader}>
                     <div className="d-flex gap-5 pt-2">
                        <p
                           onClick={() => {
                              setActive(!active);
                           }}
                           className={`${active ? styles.clickActive : styles.clickDisable}`}
                        >
                           Account Setting
                        </p>
                        <p
                           onClick={() => {
                              setActive(!active);
                           }}
                           className={`${!active ? styles.clickActive : styles.clickDisable}`}
                        >
                           Order History
                        </p>
                     </div>
                  </div>
                  {!active ? (
                     <>
                        <CardOrderHistory />
                        <CardOrderHistory />
                        <CardOrderHistory />
                     </>
                  ) : (
                     <>
                        <div className={styles.cardEdit}>
                           <p className={styles.headerEdit}>Detail Information</p>
                           <div className="d-flex justify-content-between gap-3">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label htmlFor="firstname" className="mb-2">
                                       First Name
                                    </label>
                                    <div className={styles.fieldInput}>
                                       <input
                                          type="text"
                                          className={`${styles.input}`}
                                          id="firstname"
                                          aria-describedby="emailHelp"
                                          placeholder={firstname || 'Enter your first name'}
                                          onChange={(e) => {
                                             setForm({ ...form, firstname: e.target.value });
                                          }}
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group mt-3">
                                    <label htmlFor="email" className="mb-2">
                                       Email
                                    </label>
                                    <div className={styles.fieldInput}>
                                       <input
                                          type="email"
                                          className={`${styles.input}`}
                                          id="email"
                                          placeholder={email || 'Enter your email'}
                                          onChange={(e) => {
                                             setForm({ ...form, email: e.target.value });
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label htmlFor="lastname" className="mb-2">
                                       Last Name
                                    </label>
                                    <div className={styles.fieldInput}>
                                       <input
                                          type="text"
                                          className={`${styles.input}`}
                                          id="lastname"
                                          aria-describedby="emailHelp"
                                          placeholder={lastname || 'Enter your last name'}
                                          onChange={(e) => {
                                             setForm({ ...form, lastname: e.target.value });
                                          }}
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group mt-3">
                                    <label htmlFor="phone" className="mb-2">
                                       Phone
                                    </label>
                                    <div className={styles.fieldInput}>
                                       <input
                                          type="text"
                                          className={`${styles.input}`}
                                          id="phone"
                                          placeholder={phone_number || 'Enter your phone'}
                                          onChange={(e) => {
                                             setForm({ ...form, phone_number: e.target.value });
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={styles.cardEdit}>
                           <p className={styles.headerEdit}>Account and Privacy</p>
                           <div className="d-flex justify-content-between gap-3">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label htmlFor="npass" className="mb-2">
                                       New Password
                                    </label>
                                    <div className={`d-flex align-items-center ${styles.fieldInput}`}>
                                       <input
                                          type={showPass ? 'text' : 'password'}
                                          className={`${styles.input}`}
                                          id="npass"
                                          aria-describedby="emailHelp"
                                          placeholder="Write your password"
                                          onChange={(e) => {
                                             setForm({ ...form, newPassword: e.target.value });
                                          }}
                                       />
                                       <div
                                          onClick={() => {
                                             setShowPass(!showPass);
                                          }}
                                       >
                                          <Image className="position-absolute" src={showPass ? Show : Hide} />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label htmlFor="cpass" className="mb-2">
                                       Confirm Password
                                    </label>
                                    <div className={`d-flex align-items-center ${styles.fieldInput}`}>
                                       <input
                                          type={showPassConfirm ? 'text' : 'password'}
                                          className={`${styles.input}`}
                                          id="npass"
                                          aria-describedby="emailHelp"
                                          placeholder="Confirm your password"
                                          onChange={(e) => {
                                             setForm({
                                                ...form,
                                                confirmPassword: e.target.value,
                                             });
                                          }}
                                       />
                                       <div
                                          onClick={() => {
                                             setShowPassConfirm(!showPassConfirm);
                                          }}
                                       >
                                          <Image className="position-absolute" src={showPassConfirm ? Show : Hide} />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="text-center text-md-start">
                           <button type="submit" className={styles.buttonChanges} onClick={handleUpdate}>
                              Update Changes
                           </button>
                        </div>
                     </>
                  )}
               </div>
            </form>
         </div>
      </LayoutLoggedIn>
   );
};

export default EditProfile;
