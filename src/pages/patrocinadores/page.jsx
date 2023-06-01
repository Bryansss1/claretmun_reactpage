import React from 'react';
import styles from "./patrocinadores.module.css"

const patrocinadores_array=[
    {name:"BLUE REALTORS",img:"/assets/patrocinadores_img/bluerealtors.Webp"},
    {name:"ZONA ELECTRO",img:"/assets/patrocinadores_img/zonaelectro.Webp"},
    {name:"ENTORNO LEGAL",img:"/assets/patrocinadores_img/entornolegal.Webp"},
    {name:"PROMO LII",img:"/assets/patrocinadores_img/colegioclaret.Webp"},
    {name:"JOYERIA FARI 72",img:"/assets/patrocinadores_img/fari72.Webp"},
    {name:"DIA DE BURGUERS",img:"/assets/patrocinadores_img/logodíadeburgers.Webp"},
    {name:"COSTTA",img:"/assets/patrocinadores_img/costtawhite.Webp"},
    {name:"EMPRESAS NEREY",img:"/assets/patrocinadores_img/Logonerey.Webp"},
    {name:"MEGA 72",img:"/assets/patrocinadores_img/LOGOMEGA72.Webp"},
    {name:"MARAPLUS",img:"/assets/patrocinadores_img/LogoMaraplus.Webp"},
    {name:"CVCONCA",img:"/assets/patrocinadores_img/LOGOCVCONCAWhite.Webp"},
    {name:"RAZUNCA",img:"/assets/patrocinadores_img/ranger_zulia.Webp"},
    {name:"GIO´S",img:"/assets/patrocinadores_img/gios.Webp"},
    {name:"HANDROLL",img:"/assets/patrocinadores_img/handroll.Webp"},
    {name:"LANAPO",img:"/assets/patrocinadores_img/lanapo.Webp"},
]

const Patrocinadores = () => {
    return (
        <section className={styles.container}>
            <div className={styles.title_patrocinadores_page}>
            <h3>PATROCINADORES</h3>
            <p>Gracias a ellos, este proyecto se hace realidad</p>
            </div>
            <article className={styles.grid_patrocinadores}>
                {patrocinadores_array.map(patrocionador=>(
                  <div className={styles.card_patrocinador} key={patrocionador.img}>
                  <img src={patrocionador.img} alt={patrocionador.name} />
                  <p>{patrocionador.name}</p>
                  </div>  
                ))}
            </article>
        </section>
    );
};

export default Patrocinadores ;