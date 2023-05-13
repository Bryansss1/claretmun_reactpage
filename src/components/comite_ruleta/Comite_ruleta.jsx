import React from 'react';
import Carousel, { consts} from 'react-elastic-carousel';
import styles from "./comite.module.css"
import danaImage from "/assets/comite_img/danaim.jpg"
import samImage from "/assets/comite_img/samim.jpg"
import camilaImage from "/assets/comite_img/camilaim.jpg"
import andresImage from "/assets/comite_img/andresim.jpg"
import claudiaImage from "/assets/comite_img/caludiaim.jpg"
import nelvinImage from "/assets/comite_img/nelvinim.jpg"
import ronnyImage from "/assets/comite_img/ronnyim.jpg"
import profesoraImage from "/assets/comite_img/profeim.jpg"
import {FaInstagram} from "react-icons/fa";


const comite=[
    {name:"Dana Al Aysamy",cargo:"Secretaria general",image:danaImage},
    {name:"Samantha Rangel",cargo:"Faculty Advisor",image:samImage},
    {name:"Camila Pirela",cargo:"Secretaria de Logistica",image:camilaImage},
    {name:"Andres Arcaya",cargo:"Secretario Academico",image:andresImage},
    {name:"Claudia Piña",cargo:"Secretaria de protocolo",image:claudiaImage},
    {name:"Nelvin Ramos",cargo:"Secretaria de Finanzas",image:nelvinImage},
    {name:"Ronnybeth Paris",cargo:"Secretaria de Comunicaciones",image:ronnyImage},
    {name:"Jesica Perez",cargo:"Coordinadora Docente",image:profesoraImage},
]


const Comite_ruleta =() => {
    
    return (
        <section className={styles.contenedor}>
           <Carousel className={styles.carousel} itemsToShow={1}>
            {comite.map(mienbro=>{
                return(
                    <div className={styles.card} key={mienbro.name}>
                        <img className={styles.card_image} src={mienbro.image} alt="imagen de comite" />
                        <div>
                        <p>{mienbro.name}</p>
                        <p>{mienbro.cargo}</p>
                       <a target='_blank' href="https://www.instagram.com/danaalaysamy_va/"><FaInstagram style={{fontSize:"1.5rem",cursor:"pointer"}}/></a> 
                        </div>
                    </div>
                )
            })}
         </Carousel>
        </section>
    );
};

export default Comite_ruleta;

/*


*/