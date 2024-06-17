import { useEffect, useRef } from 'react';
import Image from "next/image";
import styles from '../styles/Hero.module.css';
// import img1 from '../public/img1.png';


const Hero = () => {


  const boxRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const box = boxRef.current;

    console.log('Prev:', prev);
    console.log('Next:', next);
    console.log('Box:', box);

    // Función para mover el primer item al final
    const handleNextClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.appendChild(items[0]);
      }
      console.log('Next button clicked');
    };

    // Función para mover el último item al inicio
    const handlePrevClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.prepend(items[items.length - 1]);
      }
      console.log('Prev button clicked'); 
    };

    // Agregar event listeners
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
      <>
    <h1 className={styles.mainTittle}>Bienvenidos a Restaurante Le Blanc</h1>

    <h3 className={styles.subtitle}>Selecciona una de nuestras recomendaciones</h3>
    <section className={styles.recomends}>
        <div ref={boxRef} className={styles.box}>
                <div className={styles.item}>
                    <a href="https://radiant-dodol-a06e85.netlify.app/"><Image alt='food' width={250} height={400} src="/img1.png"/></a>
                </div>   
                <div className={styles.item}>
                    <a href="https://www.instagram.com/ar/844462340890947/"><Image alt='hamburguesa' width={250} height={400} src='/img2.png'/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://www.instagram.com/ar/978506120643986/"><Image alt='waffles' width={250} height={400} src="/img3.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://www.instagram.com/ar/835546175137282/"><Image alt='pasta' width={250} height={400} src="/img4.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://radiant-dodol-a06e85.netlify.app/"><Image alt='beef' width={250} height={400} src="/img5.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://radiant-dodol-a06e85.netlify.app/"><Image alt='ensalada' width={250} height={400} src="/img6.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://www.instagram.com/ar/993594121913962/"><Image alt='arroz' width={250} height={400} src="/img7.png"/></a>
                </div>
        </div>


        <div className={styles.buttons}>
            <span ref={prevRef} className={styles.prev}></span>
            <span ref={nextRef} className={styles.next}></span>
        </div>
    </section>

      </>
    );
};

export default Hero;