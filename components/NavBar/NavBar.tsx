import React from 'react'
import styles from "../../styles/NavBar.module.scss"
import Image from 'next/image'
import { BsSearch } from "react-icons/bs";
// BsSearch
// import SearchIcon from '@mui/icons-material/Search';
export const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/logo.png" width={160} height={60} alt=""/>
        </div>
        <div className={styles.item}>
          <div>Deliver To</div>
          <div>India</div>
          <div>
          <Image src="/img/locationlogo.png" alt="" width={30} height={30}/>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.search}>
            <input type="text" placeholder='search' className={styles.searchBar}/>
            <button type='submit' className={styles.searchButton}>
              <BsSearch/>
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <div>Hello</div>
          <div>Sign In please</div>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" height={50} width={50}/>
            <div className={styles.counter}>2</div>
          </div>
        </div>
    </div>
  )
}
