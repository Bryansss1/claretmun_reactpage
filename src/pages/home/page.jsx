import React from "react"
import styles from "./home.module.css"
import title_claret from "/assets/icons/claret_1.png"
import Menu_bar from "../../components/navbar/Menu_bar"
import shield_claret from "/assets/icons/escudo.png"
import Comite_ruleta from "../../components/comite_ruleta/Comite_ruleta"

export default function Home() {
  return (
    <main className={styles.contenedor}>
      
      <section  className={styles.header}>
      <Menu_bar/>

      <article className={styles.images_header}>
        <img src={title_claret} alt="ss" />

        <div>
        <img src={shield_claret} alt="ss" /> 
        <p style={{textAlign:"center"}} className={styles.fontF}>"Gratidud, Honor y Excelencia"</p>
        <p style={{textAlign:"center"}} className={styles.fontS}>2, 3 y 4 de Junio de 2023</p>
        </div>

      </article>
      </section>
      <Comite_ruleta/>
    </main>
  )
}