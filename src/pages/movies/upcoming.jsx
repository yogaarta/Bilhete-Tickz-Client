//Module
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown } from 'react-bootstrap-icons';
//Components Next
//Components Local
import LayoutLoggedIn from '../../components/LayoutLoggedIn/LayoutLoggedIn';
//Assets
//CssModule
import styles from '../../styles/Movies.module.css';
import UpcomingMoviesCard from '../../components/UpcomingMoviesCard/index';
import { month } from '../../modules/dummy';
//Axios
import { getNowShowingMoviesAxios, getUpcomingMoviesAxios } from '../../modules/movies';

const Movies = () => {
   const [upMovies, setUpMovies] = useState([]);
   const [sortDrop1, setSortDrop1] = useState(false);
   const [orderDrop1, setOrderDrop1] = useState(false);
   const [errMsg, setErrMsg] = useState('');
   const [search1, setSearch1] = useState('');
   const router = useRouter();
   const timeElapsed = Date.now();
   const today = new Date(timeElapsed).getUTCMonth();

   useEffect(() => {
      const { name = '', sort = '', order = '', page = '', month = '' } = router.query;
      getUpcomingMoviesAxios(name, month, sort, order, page)
         .then((res) => {
            // console.log(res);
            setUpMovies(res.data?.data);
         })
         .catch((err) => {
            console.log(err);
            setErrMsg(err.response?.data.msg);
         });
   }, [router]);

   const handleSearcUpcomingMovie = (e) => {
      e.preventDefault();
      router.push(`/movies/upcoming?name=${search1}&page=1`);
      const { name } = router.query;
      getNowShowingMoviesAxios(name, '', '', '')
         .then((res) => {
            setUpMovies(res.data?.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <LayoutLoggedIn title="Movies">
         <div className="container">
            <div className={`mt-4`}>
               <div className="d-flex d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
                  <div className="d-flex gap-5">
                     <h5
                        onClick={() => {
                           router.push(`/movies/nowshowing`);
                        }}
                        className={`fw-bold btn ${styles.headerCard}`}
                     >
                        Now Showing Movies
                     </h5>
                     <h5 className={`fw-bold btn ${styles.headerCard} ${styles.headerActive}`}>Upcoming Movies</h5>
                  </div>
                  <div className="d-flex gap-2">
                     <form className={styles.formInput} onSubmit={handleSearcUpcomingMovie}>
                        <input
                           type="text"
                           name="name"
                           placeholder="Search movie"
                           onChange={(e) => {
                              setSearch1(e.target.value);
                           }}
                        />
                     </form>
                     <div>
                        <div
                           onClick={() => {
                              setOrderDrop1(!orderDrop1);
                           }}
                           className={styles.sortBy}
                        >
                           Order <ChevronDown />
                        </div>
                        {orderDrop1 ? (
                           <div className={`${styles.menuOrder}`}>
                              <p
                                 onClick={() => {
                                    if (router.query.sort) {
                                       router.push(`/movies/upcoming?sort=${router.query.sort}&order=asc`);
                                    }
                                    setOrderDrop1(!orderDrop1);
                                 }}
                              >
                                 ASC
                              </p>
                              <p
                                 onClick={() => {
                                    if (router.query.sort) {
                                       router.push(`/movies/upcoming?sort=${router.query.sort}&order=desc`);
                                    }
                                    setOrderDrop1(!orderDrop1);
                                 }}
                              >
                                 DESC
                              </p>
                           </div>
                        ) : null}
                     </div>
                     <div>
                        <div
                           onClick={() => {
                              setSortDrop1(!sortDrop1);
                           }}
                           className={styles.sortBy}
                        >
                           Sort By <ChevronDown />
                        </div>
                        {sortDrop1 ? (
                           <div className={`${styles.menuSort}`}>
                              <p
                                 onClick={() => {
                                    router.push(`/movies/upcoming?sort=name&order=asc`);
                                    setSortDrop1(!sortDrop1);
                                 }}
                              >
                                 Name
                              </p>
                              <p
                                 onClick={() => {
                                    router.push(`/movies/upcoming?sort=release&order=asc`);
                                    setSortDrop1(!sortDrop1);
                                 }}
                              >
                                 Relaese
                              </p>
                              <p
                                 onClick={() => {
                                    router.push(`/movies/upcoming?page=1`);
                                    setSortDrop1(!sortDrop1);
                                 }}
                              >
                                 All
                              </p>
                           </div>
                        ) : null}
                     </div>
                  </div>
               </div>
               <div className={`${styles.buttonMonth}`}>
                  {month.map((item) => (
                     <button
                        onClick={() => {
                           router.push(`/movies/upcoming?month=${item.id}`);
                        }}
                        key={item.id}
                     >
                        {item.month}
                     </button>
                  ))}
               </div>
               <div className={`d-flex justify-content-start my-5 mx-5 gap-4 flex-md-row flex-wrap`}>
                  {upMovies.map((item) => (
                     <UpcomingMoviesCard name={item.name} key={item.id} id={item.id} image={item.img} />
                  ))}
               </div>
            </div>
         </div>
      </LayoutLoggedIn>
   );
};

export default Movies;
