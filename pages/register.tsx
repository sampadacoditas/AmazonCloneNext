import { style } from '@mui/system'
import React from 'react'
import styles from "../styles/Register.module.scss"
 const Register = () => {
  return (
    <div className={styles.container}>
        <div className={styles["wrapper"]}>
            <h1 className={styles["title"]}>Create An Account</h1>
            <form className={styles.form}>
                <input type="text" placeholder="name" className={styles.input}/>
                <input type="text" placeholder="last name" className={styles.input}/>
                <input type="text" placeholder="username" className={styles.input}/>
                <input type="text" placeholder="email" className={styles.input}/>
                <input type="text" placeholder="password" className={styles.input}/>
                <input type="text" placeholder="confirm password" className={styles.input}/>
                <span className={styles.Agreement}>
                    By Creating an Account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className={styles.button}>CREATE</button>
            </form>
        </div>
        </div>
  )
}
export default Register
