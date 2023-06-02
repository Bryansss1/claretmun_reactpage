import React from 'react';
import Carousel from 'react-elastic-carousel';
import styles from "./beta.module.css"

const CaroBasic = ({arrayPhoto,alt}) => {
    console.log(arrayPhoto,alt)
    return (
    
    <Carousel className={styles.mode}  enableAutoPlay autoPlaySpeed={8000}>
        {arrayPhoto.map((image,index)=>(
        <img key={image} src={image} alt={image+index} />
            ))}
    </Carousel>  
    
    );
};
export default CaroBasic;