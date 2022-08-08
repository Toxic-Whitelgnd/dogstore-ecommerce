import React from 'react'
import { useRouter } from 'next/router'
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { useState } from 'react'
import {Link} from 'react-scroll'
import s from  "../NavBar/NavBar.module.css"


export default function NavBar() {
    const [HamShow, setHamShow] = useState(false);
    const router = useRouter()
  return (
    <div className={s["navbar"]}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark shadow-lg p-4   bg-body rounded">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="/">DogKatsuki</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link activeClass="active"  className="nav-link" to="home" spy={true} smooth={true}>Home<span className="sr-only"></span></Link>
        {/* <a className="nav-link" href="#"></a></Link> */}
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/dogs">Dogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Aboutus</a>
      </li>
      <li className="nav-item">
        <a href='#' className="nav-link">OurShowroom</a>
      </li>
    </ul>
    <button type="button" class="btn btn-danger mr-3">
       <MdFavorite className="text-3xl " /> <span class="badge badge-light">4</span>
    </button>
    <button type="button" class="btn btn-success">
      <MdShoppingCart className="text-3xl " /> <span class="badge badge-light">4</span>
    </button>
    <span class="badge badge-light">4</span>
   
  </div>
</nav>
    </div>
  )
}



// <div className={styles.navbar}>
//              <section className={styles["top-nav"]}>
    
//                 <input id={styles["menu-toggle"]} type="checkbox" />
//                 <label className={styles['menu-button-container']} htmlFor={styles["menu-toggle"]}>
//                   <div className={styles['menu-button']}></div>
//                 </label>
//                   <ul className={styles["menu"]}>
//                       <li className={styles["nav-text"]}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
//                       <li className={styles["nav-text"]}><Link to="club" spy={true} smooth={true}>Club</Link></li>
//                       <li className={styles["nav-text"]}><Link to="availableclub" spy={true} smooth={true}>AvailableClub</Link></li>   
//                       <li className={styles["nav-text"]}><Link to="Contact" spy={true} smooth={true}>Contact</Link></li>
//                       <li className={styles["nav-text"]}><Link to="aboutus" spy={true} smooth={true}>Aboutus</Link></li>
//                   </ul>
//               </section>
//             </div>