import React from "react"
import styles from "./home.module.css"
import title_claret from "/assets/icons/claret_1.svg"
import Comite_organizador_ruleta from "../../components/comite_organizador/Comite_organizador_ruleta"

export default function Home() {
  return (
    <main className={styles.contenedor}>
      
      <section  className={styles.header}>
      

      <article className={styles.images_header}>
        <img className={styles.title_claret} src={title_claret} alt="claretmun logo" />

        
        <img className={styles.shield_claret} src="/assets/icons/escudo.Webp" alt="claretmun escudo" /> 
      </article>

        <div className={styles.date_and_phrase}>
        <p style={{textAlign:"center"}} className={styles.fontF}>"Gratidud, Honor y Excelencia"</p>
        <p style={{textAlign:"center"}} className={styles.fontS}>2, 3 y 4 de Junio de 2023</p>
        </div>

      </section>
      <Comite_organizador_ruleta/>
    </main>
  )
}