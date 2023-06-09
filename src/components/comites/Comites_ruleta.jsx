import React from 'react';
import Carousel from 'react-elastic-carousel';
import styles from "./comites_ruleta.module.css"

const comites_claret=[
    
    {title:"CRISIS UNICAMERAL",image:"/assets/comites_img_logos/COMITÉ-CRISIS- ICLARETMUN.Webp",subject:"LA BATALLA DEL RAGNARÖK: EL CREPÚSCULO FINAL",paragraph1:"El fin de los tiempos, la batalla del fin del mundo, el ocaso de los dioses, la confrontación final entre el bien y el mal...",paragraph2:"Balder, hijo de Odín, el más puro de los dioses, el que era luz, el más sabio... había muerto. Todos los dioses lloraban su pérdida, esta traería consecuencias. Muchas afrentas habían sido perdonadas hasta entonces, pero aquello, era imperdonable.",paragraph3:"Las tinieblas ocuparán la tierra de los humanos, su mundo se desmoronará y sólo quedarán cenizas y desolación.",paragraph4:`“Una edad del hacha, una edad de la espada -escudos serán partidos- una edad de la tormenta, una edad del lobo, antes de que el mundo se colapse. Ningún hombre salvará a otro”`,phrase:"“OS INVITO A UNIROS Y QUE LUCHEIS Y EMPRENDAIS EL CAMINO POR VUESTRA GLORIA Y HONOR”",comite:["Presidente: Bárbara Medina","Vicepresidente: José Bautista","Secretario: Paul Alizo","Asesor Académico: Julio Centeno"],guia:"/assets/guias_comites/GUÍA DE ESTUDIO - CRISIS.pdf"},
    
    {title:"CONSEJO DE SEGURIDAD",image:"/assets/comites_img_logos/COMITE-CD- ICLARETMUN.Webp",subject:"CRISIS HAITIANA COMO DAÑO COLATERAL ANTE EL LEGADO DE JOVENEL MÖISE",paragraph1:"7 de julio de 2021, Moïse fue asesinado por un grupo armado en su residencia en Puerto Príncipe, la capital de Haití. Su muerte ha agravado aún más la crisis política del país y ha llevado a un vacío de poder en el gobierno, con disputas sobre quién debería liderar el país.",paragraph2:"El Consejo de Seguridad de la ONU ha emitido varias declaraciones instando a todas las partes a respetar el estado de derecho y a trabajar hacia una solución pacífica y democrática a la crisis.",paragraph3:"En esta oportunidad, los estados representantes se reúnen de forma extraordinaria para discutir las cuestiones relacionadas de la problemática y poder llegar a un consenso en la reconstrucción politica y humanitaria del país.",phrase:"¿LOS REPRESENTANTES MIEMBROS DESARROLLARÁN UNA EFICIENTE ESTRATEGIA PARA CONSEGUIR LA PAZ Y SEGURIDAD DEL PUEBLO HAITIANO ANTES DE QUE SEA DEMASIADO TARDE?",comite:["Presidente: Zelko Stojanovich","Vicepresidente: Rodrigo Fernández","Secretaria: Alondra Piñero","Asesor: Manuel Leal"],guia:"/assets/guias_comites/GUÍA DE ESTUDIO - CS.pdf"},

    {title:"TRIBUNAL PENAL DEL DISTRITO DE KABUL",image:"/assets/comites_img_logos/COMITÉ-CORTE-I CLARETMUN.Webp",subject:"EL CASO DE FARKUNDA MALIKZADA",paragraph1:"Farkhunda Malikzada era una mujer afgana de 27 años, asesinada al exterior de la mezquita Sha-e Doh Shamshirar, de Kabul, el 19 de marzo de 2015.",paragraph2:"El crimen fue instigado por un mulá, uno de los guardianes del santuario, que se sintió amenazado por las críticas de Malikzada y la acusó a gritos de estar quemando una copia del Corán, la multitud se lanzó en contra de Farkhunda y la llevó a un área cercana a las márgenes del río Kabul donde inició su linchamiento.",paragraph3:"Hasta la actualidad se trata de uno de los casos más ligados a la religión, el fanatismo y la igualdad de género en Afganistán.",phrase:"¿AL FINAL DEL DÍA LAS PRUEBAS Y TESTIMONIOS SERÁN SUFICIENTES PARA DESENTERRAR LA VERDAD Y NADA MÁS QUE LA VERDAD?",comite:["Juez Principal: Juan Pablo Becerra","Juez Adjunto: Thomas Ocando","Transcriptor de Mesa: Juan Ávila","Juez Experto: Roman Venegas",],guia:"/assets/guias_comites/GUÍA DE ESTUDIO - CORTE.pdf"},
    
    {title:"CONSEJO DE DERECHOS HUMANOS",image:"/assets/comites_img_logos/COMITE-CDH-ICLARETMUN.Webp",subject:"INSIDENCIA DEL CRIMEN ORGANIZADO COMO AMENAZA DIRECTA ANTE LA HUMANIDAD",paragraph1:"En la actualidad, el crimen organizado sigue siendo una amenaza directa ante la humanidad en todo el mundo. La pandemia de COVID-19 ha empeorado la situación, ya que ha creado nuevas oportunidades para que los grupos criminales obtengan ganancias ilícitas y ejerzan su poder en áreas vulnerables.",paragraph2:"La pandemia ha generado una mayor demanda de medicamentos, equipos de protección personal y otros suministros médicos esenciales, incidiendo en la vulnerabilidad de la población que facilita nuevas oportunidades para que los grupos criminales recluten a personas para actividades como el tráfico de drogas, la trata de personas y la explotación laboral.",phrase:"¿LOGRARÁN LOS ESTADOS MIEMBROS CONSEGUIR RESULTADOS JUSTOS PARA LA SOCIEDAD Y VÍCTIMAS A NIVEL NACIONAL E INTERNACIONAL?",comite:["Presidente: Dariana Mahecha","Vicepresidente: Laila Govea","Secretario: Emmanuel Becerra","Asesor: Mateo Morales"],guia:"/assets/guias_comites/GUÍA DE ESTUDIO - CONSEJO DE DERECHOS HUMANOS.pdf"},
    
    {title:"BIOÉTICA",image:"/assets/comites_img_logos/COMITÉ-BIOÉTICA-ICLARETMUN.Webp",subject:"LA CONDICIÓN POSHUMANA: FILOSOFÍA TRANSHUMANISTA PARA EL PROGRESO DE LA SOCIEDAD ",paragraph1:"Desde hace décadas la ciencia ha evolucionado en función de la comodidad de la sociedad, logrando que el ser humano llegue a depender de esta más, sin embargo, se han visto casos en los cuáles la tecnología o, específicamente, la robótica ha superado las capacidades humanas; en consecuencia de esto, muchas empresas han optado por preferir máquinas y prescindir de gran cantidad de sus empleados, siendo esto solo un guiño de lo que la inteligencia artificial puede desencadenar si se sigue desarrollando.",paragraph2:`El trashumanismo representa el fin del humano como lo conocemos. Esta ideología nos presenta una sociedad que se apoya en los avances de la tecnología para "mejorarse" a sí misma, buscando eliminar sus limitaciones físicas o mentales.`,phrase:"¿QUÉ ES LO QUE REALMENTE VALE? ¿LA IDENTIDAD HUMANA O LA INTELIGENCIA ARTIFICIAL?",comite:["Presidente: Gabriela Quintero","Vicepresidente: Carlos García","Secretaria: Donatella Sambiagio","Asesor: Adriana Montiel"],guia:"/assets/guias_comites/GUÍA DE ESTUDIO -  BIOÉTICA.pdf"},
    
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
                    <p className={styles.description_p}>{comites?.paragraph1}</p>
                    <p className={styles.description_p}>{comites?.paragraph2}</p>
                    <p className={styles.description_p}>{comites?.paragraph3}</p>
                    <p className={styles.description_p}>{comites?.paragraph4}</p>
                    <p className={styles.card_phrase}>{comites?.phrase}</p>
                    <ul className={styles.card_info_participant}>
                        {comites.comite.map((participant,index)=>(
                            <li key={index}>{participant}</li>
                        ))}
                    </ul>
                    <button className={styles.botton_descarga}>
                    <a download={comites.guia} target='_blank' href={comites.guia}>Descarga aquí la guía de estudio</a>
                    </button>
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
                    <div style={{marginRight:"2rem"}}>
                    <img className={styles.card_img}  src={comites.image} alt={comites.subject} />
                    <button className={styles.botton_descarga}>
                    <a download={comites.guia} target='_blank' href={comites.guia}>Descarga aquí la guía de estudio</a>
                    </button>
                    </div>
                    <div>
                    <p className={styles.description_p}>{comites?.paragraph1}</p>
                    <p className={styles.description_p}>{comites?.paragraph2}</p>
                    <p className={styles.description_p}>{comites?.paragraph3}</p>
                    <p className={styles.description_p}>{comites?.paragraph4}</p>
                     <p className={styles.card_phrase} >{comites?.phrase}</p>
                     
                      <ul>
                        {comites.comite.map((participant,index)=>(
                            <li key={index}>{participant}</li>
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