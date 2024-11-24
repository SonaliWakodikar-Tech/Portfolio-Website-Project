import React from 'react';

import styles from "./Heroine.module.css"
import { getImageUrl } from '../../../utils';

export const Heroine = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Sonali</h1>
      <p className={styles.description}>
        I'm full-stack developer with 2 years of experience using React and NodeJS.
        I develop user Interfaces
        User friendly websites and web applications
      </p>
      
      <a href='mailto:swakodikar17@gmail.com' className={styles.contactBtn}>Contact Me</a><br></br>
      <a href='https://drive.google.com/file/d/1IqV7ejJI5Df9xJRUhK0ZKUgZJCkRgskE/view?usp=sharing' className={styles.contactBtn}>Resume</a>
      
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}></img>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
    </section>
  );
}

 
