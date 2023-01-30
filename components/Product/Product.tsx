import React from 'react'
import Image from "next/image"
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteIcon from '@mui/icons-material/Delete.js';
import styles from "../../styles/Product.module.scss"
export const Product = ({item}:any) => {
  // console.log(item.img)
    const myLoader=({src}:any)=>{
        return `${item.img}`;
      }
  return (
    <div className={styles.Container}>
      {/* <div className={styles.Circle}></div> */}
        <Image 
        loader={myLoader} 
        src={item.img} 
        className={styles.image}
        alt="" width={250} height={250}/>
        <div className={styles.info}>
            <div className={styles.icons}>
            <ShoppingCartOutlinedIcon/>
            </div>
            <div className={styles.icons}>
            <SearchOutlinedIcon/>
            </div>
            <div className={styles.icons}>
            <FavoriteBorderOutlinedIcon/>
            </div>
        </div>

    </div>
  )
}
