import React from 'react'
import styles from "../../styles/Products.module.scss"
import {popularProducts} from "../../components/data"
import { Product } from '../Product/Product'
export const Products = () => {
  return (
    <div className={styles.Container}>
    {
        popularProducts.map((item,i)=>(
            <Product item={item} key={i}/>
        ))
    }

    </div>
  )
}
