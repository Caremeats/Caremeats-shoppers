import React from 'react';
import styles from './main.module.css';
import {useState, useEffect} from 'react'; 


function Main ({data})  {


  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % data.length); // Move to next slide
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [data.length]);


  return (
    <div className={styles.slideshow}>
      {data.map((item, idx) => {
        return <img src={item.src} alt ={item.alt} key={idx} className={slide === idx ? styles.slides : styles['slides-hidden']}/> 
      })}

    <span className={styles.dots}>
      {data.map((_, idx) => {
        return ( <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? styles.dotsnav : styles['dot-inactive']}></button>
        );
      })}
      </span>
    </div>
  );

}


export default Main;