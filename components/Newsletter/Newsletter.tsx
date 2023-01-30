import { styled } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styles from "../../styles/Newsletter.module.scss"
export const Newsletter = () => {
  return (
    <div className={styles.Container}>
        <h1 className={styles.title}>NewsLetter</h1>
        <div className={styles.description}>Get Timely updates from your favorite products</div>
        <div className={styles.InputContainer}>
            <input type="text" placeholder='Enter Your Email' className={styles.input}/>
            <button className={styles.button}>
            <SendIcon/>
            </button>
        </div>
    </div>
  )
}
