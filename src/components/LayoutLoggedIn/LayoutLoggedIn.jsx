//Import Module
import { useState } from "react";
import { useRouter } from "next/router";
//NextComponent
import Head from "next/head";
import Image from "next/image";
//Css
import Styles from "../../styles/Home.module.css";
//assets
import Search from "../../assets/icon/search.png";
import Twitter from "../../assets/icon/twitter.png";
import Facebook from "../../assets/icon/fb.png";
import Youtube from "../../assets/icon/yt.png";
import Instagram from "../../assets/icon/ig.png";
import Hi from "../../assets/icon/hi.png";
import Ebu from "../../assets/icon/ebu.png";
import Cine from "../../assets/icon/cine.png";
//React Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
import { ChevronDown, TicketDetailedFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logoutAction } from "../../redux/actionCreator/login";
import Loading from "../Loading";


const LayoutLoggedIn = ({ children, title }) => {
  const { loginData } = useSelector(state => state.auth)
  const [dropdown, showDropdown] = useState(false);
  const [search, showSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  
  const router = useRouter();
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    try {
      setIsLoading(true)
      const config = { headers: { Authorization: `Bearer ${loginData.token}` } }
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_BE_HOST}/auth`, config)
      console.log(response)
      dispatch(logoutAction())
      router.push('/')
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <>
    {isLoading && <Loading />}
      <Head>
        <title>{title}</title>
      </Head>
      <div className={Styles.ContainerLayout}>
        <Navbar className="text-dark p-4" expand="lg">
          <Container>
            <div onClick={() => {
              router.push("/")
            }} className={Styles.BrandName}>BILHETE TICKZ <TicketDetailedFill className={Styles.logo} /></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-5 mt-3 mt-md-0 me-auto d-flex justify-content-between gap-md-4">
                <Nav.Link className="text-dark" href="/movies">
                  Movies
                </Nav.Link>
                <Nav.Link className="text-dark" href="/cinemas">
                  Cinemas
                </Nav.Link>
                <Nav.Link className="text-dark" href="/order">
                  Buy Ticket
                </Nav.Link>
              </Nav>
              <div className="d-flex gap-4 justify-content-md-end justify-content-end align-items-center">
                <div
                  onClick={() => {
                    showDropdown(!dropdown);
                  }}
                  className={`${Styles.dropDownNav}`}
                >
                  Location <ChevronDown />
                  {dropdown ? (
                    <div className={Styles.DropdownLoc}>Purwokerto</div>
                  ) : null}
                </div>
                <div className={`mt-1 ${Styles.searchNav}`}>
                  <Image
                    onClick={() => {
                      showSearch(!search);
                    }}
                    src={Search}
                  />
                  {search ? (
                    <div className={Styles.searchDrop}>
                      <input type="text" id="" className={Styles.searchField} />
                    </div>
                  ) : null}
                </div>
                {loginData && loginData.token ?
                  <>
                  {/* <Image src={}/> */}
                    <div
                      onClick={logoutHandler}
                      className={`${Styles.logoutButton}`}
                    >
                      Logout
                    </div>
                  </>
                  :
                  <>
                    <div
                      onClick={() => {
                        router.push("/auth/login");
                      }}
                      className={`${Styles.signButton}`}
                    >
                      Login
                    </div>
                    <div
                      onClick={() => {
                        router.push("/auth/register");
                      }}
                      className={`${Styles.signButton}`}
                    >
                      Sign Up
                    </div>
                  </>
                }
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
        <footer className={`${Styles.FooterLayout}`}>
          <div className="row justify-content-around px-5">
            <div className="col-md-4 col-12 text-center">
              <h1 className={Styles.BrandFooter}>BILHETE TICKZ</h1>
              <p>
                Stop waiting in line. Buy tickets <br />
                conveniently, watch movies quietly.
              </p>
            </div>
            <div
              className={`${Styles.listFooter} mt-3 col-12 col-md-8 d-flex justify-content-around`}
            >
              <ul>
                <h5>Explore</h5>
                <li>Cinemas</li>
                <li>Movies list</li>
                <li>My Ticket</li>
                <li>Notification</li>
              </ul>
              <ul>
                <h5>Our Sponsor</h5>
                <li>
                  {" "}
                  <Image src={Ebu} alt="sponsored" />{" "}
                </li>
                <li>
                  {" "}
                  <Image src={Cine} alt="sponsored" />
                </li>
                <li>
                  {" "}
                  <Image src={Hi} alt="sponsored" />
                </li>
              </ul>
              <ul>
                <h5>Follow us</h5>
                <li className="d-flex gap-3 justify-content-start">
                  {" "}
                  <div>
                    <Image src={Facebook} alt="logo" />{" "}
                  </div>{" "}
                  Billhete Tickz Cinema
                </li>
                <li className="d-flex gap-3 justify-content-start">
                  {" "}
                  <div>
                    <Image src={Instagram} alt="logo" />{" "}
                  </div>{" "}
                  BillheteTickz
                </li>
                <li className="d-flex gap-3 justify-content-start">
                  {" "}
                  <div>
                    <Image src={Twitter} alt="logo" />{" "}
                  </div>{" "}
                  BillheteTickz
                </li>
                <li className="d-flex gap-3 justify-content-start">
                  {" "}
                  <div>
                    <Image src={Youtube} alt="logo" />{" "}
                  </div>{" "}
                  Billhete Tickz Cinema
                </li>
              </ul>
            </div>
          </div>
          <h6 className={`${Styles.FooterCr} text-center my-5`}>© 2020 Bilhete Tickz. All Rights Reserved.</h6>
        </footer>
      </div>
    </>
  );
};

export default LayoutLoggedIn;
