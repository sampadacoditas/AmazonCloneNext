import React from 'react'
import Image from 'next/image'
import styles from "./../../styles/CatergoryItem.module.scss"
export const CatergoryItem = ({item}:any) => {
  return (
    <div className={styles.Container}>
        {/* <div className={styles.ImageContainer}> */}
        <Image src={item.img} alt="" className={styles.image} height={400} width={400}/>
        <div className={styles.info}>
            {/* <h1>{item.id}</h1> */}
            <h1 className={styles.title}>{item.title}</h1>
            <button className={styles.Button}>SHOP NOW</button>
        </div>
        </div>
    // </div>
  )
}
