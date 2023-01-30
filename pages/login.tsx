import React from 'react'
import styles from "../styles/Login.module.scss"
 const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles["wrapper"]}>
                <h1 className={styles["title"]}>Sign In</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="UserName" className={styles.input}/>
                    <input type="text" placeholder="Password" className={styles.input}/>
                    <button className={styles.button}>Login</button>
                    <a href="" className={styles.link}>Do Not You Remember The Password?</a>
                    <a href="" className={styles.link}>Create A New Account</a>
                </form>
            </div>
            </div>
      )
}
export default Login