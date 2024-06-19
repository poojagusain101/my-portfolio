import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Hero(){
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Pooja Gusain</h1>
        <p className={styles.description}>
        I&apos;m a final year student at PEC Chandigarh with a deep passion for coding and technology. My dedication to this field has been marked by a constant desire to learn and innovate. I love tackling new challenges, developing creative solutions, and exploring the latest programming languages. I&apos;m always eager to grow and push my limits.
        </p>
       <ul className={styles.contactList}>
        
        <li><a href="mailto:poojagusain101@gmail.com" className={styles.socialIcon}><FontAwesomeIcon icon={faEnvelope} /></a></li>
        <li><a href="https://www.instagram.com/pooja_gusain16?igsh=MWR2cGYwOWZ4aTNjMA==" className={styles.socialIcon}><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
        <li><a href="https://www.linkedin.com/in/pooja-gusain-a6966424a" className={styles.socialIcon}><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="http://github.com/poojagusain101" className={styles.socialIcon}><FontAwesomeIcon icon={faGithub} /></a></li>
       </ul>
        <a href="mailto:poojagusain101@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
   
  );
};
