import paciente from './paciente.png';
import vet from './veterinario.png';
import vacuna from './vacunacion.png';
import './Servicios.css';

function Servicios (){
    return (
        <div>
            <div className="title">
                    <h1>Servicios</h1>
                    <hr></hr>
                </div>
            <section id="servicios">
                
                <article className="paciente">
                    
                        <img src={paciente} alt="" class="image-fluid"/>
                        <h4>Card title</h4>
                        <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            
                </article>

                <article className="veterinario">
                    <div>
                        <img src={vet} alt="imagen veterinario" class="image-fluid"/>
                        <div>
                            <h4>Servicio Médico</h4>
                            <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </article>

                <article className="vacuna">
                    <div>
                        <img src={vacuna} alt="imagen perro" class="image-fluid"/>
                        <div>
                            <h4>Vacunacion</h4>
                            <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
);
}

export default Servicios;
