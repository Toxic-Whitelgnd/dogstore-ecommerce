import React from 'react'
import s from  "../Footer/footer.module.css"
import  * as Fiico from "react-icons/fi" 

export default function Footer() {
  return (
    <div>
        <div className={s["footer-basic"]}>
        <footer>
            <div className={s["social"]}><a href="#"><Fiico.FiFacebook /></a><a href="#"><Fiico.FiInstagram /></a><a href="#"><Fiico.FiTwitter /></a><a href="#"><Fiico.FiYoutube /></a></div>
            <ul className={s["list-inline"]}>
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className={s["copyright"]}>Akatsuki Organisation © 2022</p>
        </footer>
    </div>
    </div>
  )
}
