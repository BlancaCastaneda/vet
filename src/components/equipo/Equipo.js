import React from 'react';
import golden from './golden.jpg';
import './Equipo.css';
import '../../index.css';

function Equipo (){
    return (
    <div>
        <section id="intro">
            <article className="agenda">
                <h3>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO</h3>
                <p>Queremos que conozcas nuestra propuesta de baño para mascotas, donde tenemos espacios dedicados para evitar 
                    la contaminacion cruzada que pueda llegar a existir en una veterinaria. Aplica de lunes a viernes para mascotas 
                    que visitan la clinica por primera vez.
                </p>

                <p>RECUERDA QUE NUESTRO EQUIPO MEDICO TE CONFIRMARA LA CITA</p>
                
                <div className="boton">
                    <button className="registro"><i class="far fa-calendar-alt"></i>Agenda tu cita</button>
                </div> 
            </article>

            <article className="promo">
                <h2>GRATIS PRIMER BAÑO</h2>
				<img src={golden} />
            </article>

        </section>
    </div>
 );
}

export default Equipo;
