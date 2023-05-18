import React from 'react';
import Comites_ruleta from '../../components/comites/Comites_ruleta';
import styles from "../comites/comite.module.css"

const Comite = () => {
    return (
        <section className={styles.contenedor}>
            <h3>COMITÉS</h3>
        <Comites_ruleta/>
        </section>
    );
};

export default Comite;