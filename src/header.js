import React, { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh'
import styles from './header.module.css';

export default function Header() {
  const kanjiNumbers = ['', '壹', '貮', '參', '肆', '伍'];
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const createLine = (position) => {
      const line = document.createElement('div');
      line.className = styles['line' + position];
      document.body.appendChild(line);
    };
    ['Top', 'Bottom', 'Right', 'Left'].forEach(createLine);
  }, []);

  return (
    <>
      <Div100vh>
        <header id={styles.header}>
          <div className={styles.border} />
          {countdown > 0 ? (
            <p className={styles.kanjiNumbers}>{kanjiNumbers[countdown]}</p>
          ) : (
            <>
              <div className={styles.fadeInContainer}>
                <div className={styles.nameContainer}>
                  <p className={styles.nameKanji}>脩&nbsp;眞</p>
                  <p className={styles.nameRoman}>shuma.</p>
                  <p className={styles.birthday}>(327)</p>
                </div>
                <svg class={styles.arrows}>
                  <path class={styles.a1} d="M0 0 L30 32 L60 0" />
                  <path class={styles.a2} d="M0 20 L30 52 L60 20" />
                  <path class={styles.a3} d="M0 40 L30 72 L60 40" />
                </svg>
              </div>
            </>
          )}
        </header>
      </Div100vh>
    </>
  )
}
