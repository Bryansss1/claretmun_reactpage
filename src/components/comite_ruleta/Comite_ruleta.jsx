import React,{useEffect, useState} from 'react';
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
    {name:"Dana Al Aysamy",cargo:"Secretaria general",image:danaImage,instagram:""},
    {name:"Samantha Rangel",cargo:"Faculty Advisor",image:samImage,instagram:""},
    {name:"Camila Pirela",cargo:"Secretaria de Logistica",image:camilaImage,instagram:""},
    {name:"Andres Arcaya",cargo:"Secretario Academico",image:andresImage,instagram:""},
    {name:"Claudia Piña",cargo:"Secretaria de protocolo",image:claudiaImage,instagram:""},
    {name:"Nelvin Ramos",cargo:"Secretaria de Finanzas",image:nelvinImage,instagram:""},
    {name:"Ronnybeth Paris",cargo:"Secretaria de Comunicaciones",image:ronnyImage,instagram:""},
    {name:"Jesica Perez",cargo:"Coordinadora Docente",image:profesoraImage,instagram:""},
]


const Comite_ruleta =() => {
const[numberPeople,setNumberpeople]=useState(1)
const desktop=window.matchMedia("(max-width:11780px)").matches
const mobile=window.matchMedia("(max-width:600px)").matches
const table=window.matchMedia("(max-width:850px)").matches
useEffect(()=>{
if(desktop)setNumberpeople(3)
if(table)setNumberpeople(2)
if(mobile)setNumberpeople(1)
},[])
    return (
        <section className={styles.contenedor}>
            <h2 className={styles.title_comite}>Comité Organizador</h2>
           <Carousel className={styles.carousel} itemsToShow={numberPeople}>
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