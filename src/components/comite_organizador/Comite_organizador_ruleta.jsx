import React,{useEffect, useState} from 'react';
import Carousel, { consts} from 'react-elastic-carousel';
import styles from "./comite.module.css"
import {FaInstagram} from "react-icons/fa";


const comite=[
    {name:"Dana Al Aysamy",cargo:"Secretaria General",image:"/assets/comite_img/danaim.Webp",instagram:"https://instagram.com/danaalaysamy_va?igshid=YmMyMTA2M2Y="},
    {name:"Samantha Rangel",cargo:"Faculty Advisor",image:"/assets/comite_img/samim.Webp",instagram:"https://instagram.com/saamantharaangeel?igshid=YmMyMTA2M2Y="},
    {name:"Camila Pirela",cargo:"Secretaria de Logística",image:"/assets/comite_img/camilaim.Webp",instagram:"https://instagram.com/camilapirela1406?igshid=YmMyMTA2M2Y="},
    {name:"Andrés Arcaya",cargo:"Secretario Académico",image:"/assets/comite_img/andresim.Webp",instagram:"https://instagram.com/claretmun_?igshid=NTc4MTIwNjQ2YQ=="},
    {name:"Claudia Piña",cargo:"Secretaria de Protocolo",image:"/assets/comite_img/caludiaim.Webp",instagram:"https://instagram.com/claudiapinaro?igshid=YmMyMTA2M2Y="},
    {name:"Nelvin Ramos",cargo:"Secretario de Finanzas",image:"/assets/comite_img/nelvinim.Webp",instagram:"https://instagram.com/claretmun_?igshid=NTc4MTIwNjQ2YQ=="},
    {name:"Ronnybeth Paris",cargo:"Secretaria de Comunicaciones",image:"/assets/comite_img/ronnyim.Webp",instagram:"https://instagram.com/ronnybethpariss?igshid=YmMyMTA2M2Y="},
    {name:"Jesica Pérez",cargo:"Coordinadora Docente",image:"/assets/comite_img/profeim.Webp",instagram:"https://instagram.com/jesicadelc_perez?igshid=YmMyMTA2M2Y="},
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