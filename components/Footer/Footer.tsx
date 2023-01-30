import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>Get to Know Us</h1>
          <p className={styles.text}>About Us</p>
          <p className={styles.text}>Careers</p>
          <p className={styles.text}>Press Releases</p>
          <p className={styles.text}>Amazon Cares</p>
          <p className={styles.text}>Gift a Smile</p>
          <p className={styles.text}>Amazon Science</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Connect with Us</h1>
          <p className={styles.text}>FaceBook</p>
          <p className={styles.text}>Twitter</p>
          <p className={styles.text}>Instagram</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Make Money with Us</h1>
          <p className={styles.text}>Sell on Amazon Accelerator</p>
          <p className={styles.text}>Become an Affiliate</p>
          <p className={styles.text}>Fulfilment by Amazon</p>
          <p className={styles.text}>Advertise Your Products</p>
          <p className={styles.text}>Amazon Pay on Merchants</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Let Us Help You</h1>
          <p className={styles.text}>COVID-19 and Amazon</p>
          <p className={styles.text}>Your Account</p>
          <p className={styles.text}>Returns Centre</p>
          <p className={styles.text}>100% Purchase Protection</p>
          <p className={styles.text}>Amazon App Download</p>
          <p className={styles.text}>Amazon Assistant Download</p>
          <p className={styles.text}>Help</p>
        </div>
      </div>
      {/* <hr className={styles.horizontal}/> */}
      <div className={styles.item}>
        <div className={styles.card}>
          <Image src="/img/logo.png" alt="" width={70} height={40} className={styles.logo}/>
          <div className={styles.language}>
            English
        </div>
        </div>
        <div className={styles.card}>
          <span>India </span>
          <span>Spain </span>
          <span>Russia </span>
          <span>Japan </span>
          <span>China </span>
          <span>USA </span>
          <span>England </span>
          <span>Austriala </span>
          <span>Germany </span>
          <span>Singapore</span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <div>
          <div className={styles.card}>
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
};
