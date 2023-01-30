import React from 'react'
import { CatergoryItem } from '../CatergoryItem/CatergoryItem'
import { categories } from '../data'
import styles from "../../styles/Categories.module.scss"
export const Categories = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.wrapper}>
        {
            categories.map((item,i)=>{
                return(
                    <div className={styles.item} key={i}>
                        <CatergoryItem item={item}/>
                    </div>
                )
            })
            
        }
        </div>

    </div>
  )
}
