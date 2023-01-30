import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.scss";
const Cart = () => {
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  // <Image
  // loader={myLoader}
  // src={item.img}
  // className={styles.image}
  // alt="" width={250} height={250}/>
  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Your Bag</h1>
        <div className={styles.top}>
          <button className={styles.topButton}>CONTINUE SHOPPING</button>
          <div className={styles.TopTexts}>
            <span className={styles.TopText}>Shopping Bag(2)</span>
            <span className={styles.TopText}>Your wishlist(0)</span>
          </div>
          <button className={styles.topButton}>CHECKOUT NOW</button>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.info}>
            <div className={styles.product}>
              <div className={styles.image}>
                <Image
                  loader={myLoader}
                  src="https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=170667a&w=0&k=20&c=y1FHrCh-L7nQv6wP3zD2iymHlP45duKXyd0m12KTNE4="
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.productName}>
                  <b>Product: </b> JESSIE THUDER SHOES
                </div>
                <div className={styles.productId}>
                  <b>Product: </b>123456789
                </div>
                <div className={styles.productColor}>
                    
                </div>
                <div className={styles.size}>
                  <b>Size: </b> 37.5
                </div>
              </div>
              <div className={styles.priceDetails}>
                <div className={styles.AmountOfProduct}>
                    <span className={styles.minus}>-</span>
                    <span className={styles.count}>2</span>
                    <span className={styles.add}>+</span>
                </div>
                <div className={styles.price}>
                    <span>$</span>
                    <span>10</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <Image
                  loader={myLoader}
                  src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UL1500_.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.productName}>
                  <b>Product: </b> JESSIE THUDER SHOES
                </div>
                <div className={styles.productId}>
                  <b>Product: </b>123456789
                </div>
                <div className={styles.productColor}></div>
                <div className={styles.size}>
                  <b>Size: </b> 37.5
                </div>
              </div>
              <div className={styles.priceDetails}>
                <div className={styles.AmountOfProduct}>
                    <span className={styles.minus}>-</span>
                    <span className={styles.count}>2</span>
                    <span className={styles.add}>+</span>
                </div>
                <div className={styles.price}>
                    <span>$</span>
                    <span>10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h1 className={styles.title}>ORDER SUMMARY</h1>
            <div className={styles.subTotal}>
              <h3 className={styles.heading}>SubTotal</h3>
              <div className={styles.amount}>$80</div>
            </div>
            <div className={styles.estimatedShipping}>
              <h3>Estimated shipping</h3>
              <div>$5.90</div>
            </div>
            <div className={styles.discount}>
              <h3>shipping Discount</h3>
              <div>$7.3</div>
            </div>
            <div className={styles.total}>
              <h3>Total</h3>
              <div>$80</div>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
