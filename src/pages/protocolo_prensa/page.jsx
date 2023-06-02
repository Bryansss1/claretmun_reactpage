import React from 'react';
import styles from "./protocolo.module.css"
import CaroBasic from '../../components/carousel_basic/CaroBasic';


const protocolo=[
    "/assets/protocolo_general/IMG_0794.Webp",
    "/assets/protocolo_general/IMG_0800.Webp",
]
const auxiliadores_fijos=[
    "/assets/auxiliadores_fijos/IMG_0792.Webp",
    "/assets/auxiliadores_fijos/IMG_0796.Webp",
    "/assets/auxiliadores_fijos/IMG_0797.Webp",
    "/assets/auxiliadores_fijos/P1020970.Webp"
]
const auxiliadores_sesion=[
    "/assets/auxiliadores_sesion/IMG_0791.Webp",
    "/assets/auxiliadores_sesion/IMG_0799.Webp",
]
const staff=[
"/assets/staff/IMG_1141.Webp",
"/assets/staff/IMG_0704.Webp",
"/assets/staff/IMG_0808.Webp"
]

const Protocolo = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header_page}>
                <img src="/assets/icons/escudo.Webp" alt="SHIELD CLARET" />
                <div className={styles.header_title}>
                    <h3>PROTOCOLO Y PRENSA</h3>
                    <p>Estas son las personas que se encargan del desarrollo y funcionamiento de CLARET MUN</p>
                </div>
            </div>

            <article>

            <div className={styles.protocolo_seccion}>
                <div className={styles.carousel} >
                    <CaroBasic arrayPhoto={protocolo} alt={"protocolo"}/>
                </div>
            <div  className={styles.protocolo_seccion_titles}>
                <h5>PROTOCOLO</h5>
                <p>Si bien, ya conocemos dos divisiones que componen el Staff, el protocolo general, es por si mismo, el corazón del grupo, normalmente lo componen los estudiantes más pequeños en edades, de esta forma, logran aprender para próximos años, el valor de este grupo se caracteriza por la ligereza y disposición ante situaciones donde se requiera su apoyo. Suelen encontrarse en áreas generales y comunes, procurando auxiliar a todo aquel que lo necesite, también, fungen como una guía para los observadores que asisten al evento. Cada año, este grupo de jóvenes aporta al Modelo una estructura y organización necesaria para alcanzar el mayor rendimiento posible.</p>
            </div>
            </div>

            <div className={styles.auxiliadores_seccion}>
                <div className={styles.carousel} >
                    <CaroBasic arrayPhoto={auxiliadores_fijos} alt={"auxiliadores_fijos"}/>
                </div>
            <div  className={styles.auxiliadores_seccion_titles}>
                <h5>AUXILIADORES FIJOS</h5>
                <p>Dentro de nuestro equipo de protocolo, encontramos una división designada “Auxiliadores fijos” los cuáles se encargan de colaborar y atender situaciones en zonas concretas, por los alrededores de todo el Modelo, asimismo, en horarios concretos, para manejar una organización de excelencia que asegure el cumplimiento y el desarrollo académico para todos los delegados y Staff. Desde todo el Comité Organizador, nos sentimos complacidos por todo el trabajo que han ido demostrando y seguirán demostrando los días de esta I Edición del Modelo de Naciones Unidas del Colegio Claret.</p>
            </div>
            </div>

            <div className={styles.auxiliadores_seccion}>
                <div className={styles.carousel} >
                    <CaroBasic arrayPhoto={auxiliadores_sesion} alt={"auxiliadores_sesion"}/>
                </div>
            <div  className={styles.auxiliadores_seccion_titles}>
                <h5>AUXILIADORES DE SESION</h5>
                <p>Para que un Modelo de Naciones Unidas pueda llevarse a cabo, es primordial agilizar las acciones dentro de este. En todo caso, al simular las verdaderas sesiones de organizaciones multilaterales de carácter internacional, contamos con una categoría de “Auxiliadores de Sesión” este grupo encargado, tiene como objetivo facilitar la fluidez dentro de las sesiones, ya que, dichas acciones pequeñas como alcanzar el refrigerio, ser un medio de contacto entre delegaciones, asistir a los delegados, entre otros, para los integrantes de CLARETMUN, se traduce a una gran cooperación entre equipo que ayuda a alcanzar e impulsar la calidad académica y los valores sociales.</p>
            </div>
            </div>

            <div className={styles.staff_seccion}>
                <div className={styles.carousel} >
                    <CaroBasic arrayPhoto={staff} alt={"staff"}/>
                </div>
            <div  className={styles.staff_seccion_titles}>
                <h5>STAFF DE PRENSA</h5>
                <p>El staff de prensa es el principal encargado de documentar todo el proceso antes y durante el Modelo, mediante herramientas artísticas y audiovisuales, estás personas transmiten y comparten de forma interna y externa las emociones del evento, asimismo, como detrás de cámaras y momentos de recreación que, caracterizan todo el esfuerzo y organización de tan magno Modelo de Naciones Unidas.</p>
            </div>
            </div>

            


            </article>
        </section>
    );
};

export default Protocolo;