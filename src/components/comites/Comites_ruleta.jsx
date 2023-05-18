import React,{useEffect, useState} from 'react';
import Carousel, { consts} from 'react-elastic-carousel';
import crisisImage from "/assets/comites_img_logos/COMITÉ-CRISIS- ICLARETMUN.png"
import cdhaiti from "/assets/comites_img_logos/COMITE-CD- ICLARETMUN.png"
import corteAfganistan from "/assets/comites_img_logos/COMITÉ-CORTE-I CLARETMUN.png"
import bioeticaImg from "/assets/comites_img_logos/COMITÉ-BIOÉTICA-ICLARETMUN.png"
import consejoHumanos from "/assets/comites_img_logos/COMITE-CDH-ICLARETMUN.png"
import styles from "./comites_ruleta.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserCheck } from 'react-icons/fa';

const comites_claret=[
    {title:"CRISIS UNICAMERAL",image:crisisImage,subject:"LA BATALLA DE RAGNARÖK: EL CREPUSCULO FINAL",description:"El fin de los tiempos, la batalla del fin del mundo, el ocaso de los dioses, la confrontación final entre el bien y el mal...Balder, hijo de Odín, el más puro de los dioses, el que era luz, el más sabio... había muerto. Todos los dioses lloraban su pérdida, esta traería consecuencias. Muchas afrentas habían sido perdonadas hasta entonces, pero aquello, era imperdonable. Las tinieblas ocuparán la tierra de los humanos, su mundo se desmoronará y sólo quedarán cenizas y desolación .Una edad del hacha, una edad de la espada -escudos serán partidos- una edad de la tormenta, una edad del lobo, antes de que el mundo se colapse. Ningún hombre salvará a otro",phrase:"“OS INVITO A UNIROS Y QUE LUCHEIS Y EMPRENDAIS EL CAMINO POR VUESTRA GLORIA Y HONOR”",comite:["Presidente: José Bautista","Vicepresidente: Bárbara Medina","Asesor: Paul Alizo"]},
    {title:"CONSEJO DE SEGURIDAD",image:cdhaiti,subject:"FILOSOFIA TRANSHUMANISTA PARA EL PROGRESO DE LA SOCIEDAD",description:`7 de julio de 2021, Moïse fue asesinado por un grupo armado en su residencia en Puerto Príncipe, la capital de Haití. Su muerte ha agravado aún más la crisis política del país y ha llevado a un vacío de poder en el gobierno, con disputas sobre quién debería liderar el país.
    El Consejo de Seguridad de la ONU ha emitido varias declaraciones instando a todas las partes a respetar el estado de derecho y a trabajar hacia una solución pacífica y democrática a la crisis.`,phrase:"EN ESTA OPORTUNIDAD, LOS ESTADOS REPRESENTANTES SE REÚNEN DE FORMA EXTRAORDINARIA PARA DISCUTIR LAS CUESTIONES RELACIONADAS DE LA PROBLEMÁTICA Y PODER LLEGAR A UN CONSENSO EN LA RECONSTRUCCIÓN POLÍTICA Y HUMANITARIA DEL PAÍS.",comite:["Presidente: Dariana Mahecha","Vicepresidente: Laila Govea","Secretario: Emmanuel Becerra","Asesor: Mateo Morales"]},
    {title:"TRIBUNAL PENAL DEL DISTRITO DE KABUL",image:corteAfganistan,subject:"EL CASO DE FARKUNDA MALIKZADA",description:`Farkhunda Malikzada era una mujer afgana de 27 años, asesinada al exterior de la mezquita Sha-e Doh Shamshirar, de Kabul, el 19 de marzo de 2015.
    El crimen fue instigado por un mulá, uno de los guardianes del santuario, que se sintió amenazado por las críticas de Malikzada y la acusó a gritos de estar quemando una copia del Corán, la multitud se lanzó en contra de Farkhunda y la llevó a un área cercana a las márgenes del río Kabul donde inició su linchamiento.
    Hasta la actualidad se trata de uno de los casos más ligados a la religión, el fanatismo y la igualdad de género en Afganistán.`,phrase:"kills",comite:["Juez Principal: Juan Pablo Becerra","Juez Experto: Roman Venegas","Juez Adjunto: Thomas Ocando","Transcriptor de Mesa: Juan Ávila"]},
    {title:"CONSEJO DE DERECHOS HUMANOS",image:consejoHumanos,subject:"INSIDENCIA DEL CRIMEN ORGANIZADO COMO AMENAZA DIRECTA ANTE LA HUMANIDAD",description:`En la actualidad, el crimen organizado sigue siendo una amenaza directa ante la humanidad en todo el mundo. La pandemia de COVID-19 ha empeorado la situación, ya que ha creado nuevas oportunidades para que los grupos criminales obtengan ganancias ilícitas y ejerzan su poder en áreas vulnerables.
    La pandemia ha generado una mayor demanda de medicamentos, equipos de protección personal y otros suministros médicos esenciales, incidiendo en la vulnerabilidad de la población que facilita nuevas oportunidades para que los grupos criminales recluten a personas para actividades como el tráfico de drogas, la trata de personas y la explotación laboral.`,phrase:`COVID-19!`,comite:["Presidente: Gabriela Quintero","Vicepresidente: Carlos García","Secretario: Donatella Sambiagio","Asesor: Adriana Montiel"]},
    {title:"BIOETICA",image:bioeticaImg,subject:"LA CONDICIÓN POSHUMANA: FILOSOFÍA TRANSHUMANISTA PARA EL PROGRESO DE LA SOCIEDAD ",description:`Desde hace décadas la ciencia ha evolucionado en función de la comodidad de la sociedad, logrando que el ser humano llegue a depender de esta más, sin embargo, se han visto casos en los cuáles la tecnología o, específicamente, la robótica ha superado las capacidades humanas; en consecuencia de esto, muchas empresas han optado por preferir máquinas y prescindir de gran cantidad de sus empleados, siendo esto solo un guiño de lo que la inteligencia artificial puede desencadenar si se sigue desarrollando.
    El trashumanismo representa el fin del humano como lo conocemos.`,phrase:`ESTA IDEOLOGÍA NOS PRESENTA UNA SOCIEDAD QUE SE APOYA EN LOS AVANCES DE LA TECNOLOGÍA PARA "MEJORARSE" A SÍ MISMA, BUSCANDO ELIMINAR SUS LIMITACIONES FÍSICAS O MENTALES.`,comite:["Presidente: Gabriela Quintero","Vicepresidente: Carlos García","Secretario: Donatella Sambiagio","Asesor: Adriana Montiel"]},
  ]

const Comites_ruleta = () => {
const desktop=window.matchMedia("(max-width:11780px)").matches
const mobile=window.matchMedia("(max-width:699px)").matches
if(mobile){
    return (
        <article className={styles.carousel_principal}>
          <Carousel className={styles.carousel} itemsToShow={1}>
           {comites_claret.map((comites,index)=>(
            <div key={index} className={styles.card}>
                <h4>{comites.title}</h4>
                <div className={styles.card_info}>
                    <img className={styles.card_img}  src={comites.image} alt={comites.subject} />
                    <p className={styles.card_subject}>{comites.subject}</p>
                    <p>{comites.description}</p>
                    <p style={{marginTop:".5rem",color:"gold",textAlign:"center",fontSize:".7rem"}}>{comites.phrase}</p>
                    <ul className={styles.card_info_participant}>
                        {comites.comite.map((participant,index)=>(
                            <li key={index}><FaUserCheck style={{width:"1.3rem"}}/>{participant}</li>
                        ))}
                    </ul>
                </div>
            </div>
           ))}
         </Carousel>
        </article>
    );
}
if(desktop){
    return(
<article className={styles.carousel_principal}>
          <Carousel className={styles.carousel} itemsToShow={1}>
           {comites_claret.map((comites,index)=>(
            <div key={index} className={styles.card}>

                <div>
                <h4>{comites.title}</h4>
                <p className={styles.card_subject}>{comites.subject}</p>
                </div>

                <div className={styles.card_info}>
                    <img className={styles.card_img}  src={comites.image} alt={comites.subject} />
                    <div>
                     <p>{comites.description}</p>
                     <p style={{color:"gold",textAlign:"center",fontSize:".7rem",marginTop:"1rem"}}>{comites.phrase}</p>
                     <ul>
                        {comites.comite.map((participant,index)=>(
                            <li key={index}><FaUserCheck style={{width:"1.3rem"}}/>{participant}</li>
                        ))}
                    </ul>   
                    </div>
                    
                </div>
                    
            </div>
           ))}
         </Carousel>
        </article>
        )
}
};

export default Comites_ruleta;