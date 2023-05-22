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
    {name:"Dana Al Aysamy",cargo:"Secretaria General",image:danaImage,instagram:"https://instagram.com/danaalaysamy_va?igshid=YmMyMTA2M2Y="},
    {name:"Samantha Rangel",cargo:"Faculty Advisor",image:samImage,instagram:"https://instagram.com/saamantharaangeel?igshid=YmMyMTA2M2Y="},
    {name:"Camila Pirela",cargo:"Secretaria de Logistica",image:camilaImage,instagram:"https://instagram.com/camilapirela1406?igshid=YmMyMTA2M2Y="},
    {name:"Andres Arcaya",cargo:"Secretario Academico",image:andresImage,instagram:"https://instagram.com/claretmun_?igshid=NTc4MTIwNjQ2YQ=="},
    {name:"Claudia Piña",cargo:"Secretaria de Protocolo",image:claudiaImage,instagram:"https://instagram.com/claudiapinaro?igshid=YmMyMTA2M2Y="},
    {name:"Nelvin Ramos",cargo:"Secretaria de Finanzas",image:nelvinImage,instagram:"https://instagram.com/claretmun_?igshid=NTc4MTIwNjQ2YQ=="},
    {name:"Ronnybeth Paris",cargo:"Secretaria de Comunicaciones",image:ronnyImage,instagram:"https://instagram.com/ronnybethpariss?igshid=YmMyMTA2M2Y="},
    {name:"Jesica Perez",cargo:"Coordinadora Docente",image:profesoraImage,instagram:"https://instagram.com/jesicadelc_perez?igshid=YmMyMTA2M2Y="},
]


const Comite_organizador_ruleta =() => {
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
            <div className={styles.carousel_principal}>
           <Carousel className={styles.carousel} itemsToShow={numberPeople}>
            {comite.map(mienbro=>{
                return(
                    <div className={styles.card} key={mienbro.name}>
                        <img className={styles.card_image} src={mienbro.image} alt="imagen de comite" />
                        <div>
                        <p>{mienbro.name}</p>
                        <p>{mienbro.cargo}</p>
                       <a style={{marginTop:".5rem"}} target='_blank' href={mienbro.instagram}><FaInstagram className={styles.iconIg}/></a> 
                        </div>
                    </div>
                )
            })}
         </Carousel>
         </div>
        </section>
    );
};

export default Comite_organizador_ruleta;

/*


*/