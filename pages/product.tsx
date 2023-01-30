import React from "react";
import Image from "next/image";
// import Image from 'next/image'
import RemoveIcon from '@mui/icons-material/Remove';
import styles from "../styles/ProductPage.module.scss";
import AddIcon from '@mui/icons-material/Add';
const Product = () => {
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            loader={myLoader}
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
            height={500}
            width={500}
            className={styles.Image}
          />
        </div>
        <div className={styles.InfoContainer}>
          <h1 className={styles.title}>Denim JumpSuit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
            ratione expedita provident, tempora rem nihil aliquid, consequuntur
            debitis minus, libero doloribus vero numquam rerum accusantium
            inventore quis distinctio doloremque!
          </p>
          <span className={styles.price}>Ruppes 2335</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.title}>Color:</span>
              <div className={styles.filterColor}></div>
              <div className={styles.filterColor}></div>
              <div className={styles.filterColor}></div>
              <div className={styles.filterColor}></div>
            </div>
            <div className={styles.filter}>
              <span className={styles.title}>Size:</span>
              <select className={styles.select}>
                <option value="white">XS</option>
                <option value="Black">S</option>
                <option value="Red">L</option>
                <option value="Pink">XL</option>
                <option value="gray">XXL</option>
                <option value="violet">XXXL</option>
              </select>
            </div>
          </div>
          <div className={styles.AddContainer}>
            <div className={styles.AmountContainer}>
                {/* <span className={styles["remove"]}>-</span> */}
                <RemoveIcon/>
                <div className={styles.Amount}>
                <span className={styles.text}>1</span>
                </div>
                <AddIcon/>
                {/* <span className={styles.add}>+</span> */}
            </div>
            <button className={styles.addToCart}>Add to cart</button>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
