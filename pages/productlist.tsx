import React from 'react'
import { Newsletter } from '../components/Newsletter/Newsletter'
import { Products } from '../components/Products/Products'
import styles from "./../styles/ProductList.module.scss"
 const productlist = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Dresses</div>
        <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterText}>Filter Products:</span>
              <select className={styles.select}>
              <option disabled selected>Color</option>
              <option value="white">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Pink">pink</option>
              <option value="gray">Gray</option>
              <option value="violet">Violet</option>
            </select>
            <select className={styles.select}>
              <option disabled selected>Size</option>
              <option value="white">XS</option>
              <option value="Black">S</option>
              <option value="Red">L</option>
              <option value="Pink">XL</option>
              <option value="gray">XXL</option>
              <option value="violet">XXXL</option>
            </select>
              </div>
            <div className={styles.filter}>
            <span className={styles.filterText}>Sort Products:</span>
            <select className={styles.select}>
              <option disabled selected>Newest</option>
              <option value="white">Price (asc)</option>
              <option value="Black">Price (desc)</option>
            </select>
          
            </div>
        </div>
       <Products/>
        <Newsletter/>
    </div>
  )
}
export default productlist