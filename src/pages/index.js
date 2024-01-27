import React, { useState, useEffect } from 'react';
import Header from '../header';

export default function Home() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <Header />
      {/* {countdown === 0 && (
        <div id="container">
          <p>テスト</p>
        </div>
      )} */}
    </>
  )
}
