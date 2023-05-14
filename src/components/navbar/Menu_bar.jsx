import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu_icon from "/assets/icons/apps.svg"
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Menu_bar = () => {

const [showBotton,setBotton]=useState(false)
const desktop=window.matchMedia("(min-width:700px)").matches
const [colorNav,setNavcolor]=useState(false)

const changeColor=()=>{
if(window.scrollY>=70){
setNavcolor(true)
}else{
setNavcolor(false)
}
}

useEffect(()=>{
if(desktop){
setBotton(true) 
}
},[])
window.addEventListener("scroll",changeColor)


    return (
        <article className={styles.contenedor}>
           {desktop?(
            showBotton?
                <ul style={colorNav?{color:"blue"}:{background:"transparent"}} className={styles.seccion}>
                 <FontAwesomeIcon onClick={()=>setBotton(!showBotton)} className={styles.quitbotton} icon={faXmark} />
                     <li><Link className={styles.b} to={"/"}>Home</Link></li>
                     <li><Link to={"/protocolo"}>Protocolo y prensa</Link></li>
                     <li><Link to={"/reglamento"}>Reglamento</Link></li>
                     <li><Link to={"/comites"}>Comites</Link></li>
                     <li><Link to={"/patrocinadores"}>Patrocinadores</Link></li>
                 </ul>:
                 <img className={styles.menu_icon} onClick={()=>setBotton(!showBotton)} src={menu_icon} alt=''/>
                 
           ):(
            showBotton?
                <ul className={styles.seccion}>
                 <FontAwesomeIcon onClick={()=>setBotton(!showBotton)} className={styles.quitbotton} icon={faXmark} />
                     <li><Link className={styles.b} to={"/"}>Home</Link></li>
                     <li><Link to={"/protocolo"}>Protocolo y prensa</Link></li>
                     <li><Link to={"/reglamento"}>Reglamento</Link></li>
                     <li><Link to={"/comites"}>Comites</Link></li>
                     <li><Link to={"/patrocinadores"}>Patrocinadores</Link></li>
                 </ul>:
                 <img className={styles.menu_icon} onClick={()=>setBotton(!showBotton)} src={menu_icon} alt=''/>
                 
           )
           }
           
            
        </article>
    );
};

export default Menu_bar