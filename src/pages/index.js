import React, { useState, useEffect } from 'react';
import Top from '../top';

export default function Home() {
  const kanjiNum = ['', '壹', '貮', '參', '肆', '伍'];
  const [countdown, setCountdown] = useState(kanjiNum.length - 1);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const createLine = (className) => {
      const line = document.createElement('div');
      line.className = `animationLine${className}`;
      document.body.appendChild(line);
    };
    ['Top', 'Bottom', 'Right', 'Left'].forEach(createLine);
  }, []);

  return (
    <>
      {countdown > 0 ? (
        <div className="countdownContainer">
          <div className="kanjiNum">{kanjiNum[countdown]}</div>
        </div>
      ) : (
        <Top />
      )}
    </>
  )
}
