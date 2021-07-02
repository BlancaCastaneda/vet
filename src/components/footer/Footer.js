import './Footer.css';

function Footer() {
  return (
    <section id="info">
	    <div className="cajainfo">
            <article className="cajai">
                <i className="far fa-building"></i>
                <h5>Sedes</h5>
                <ul>
                    <li>Sede Virrey</li>
                    <li>Sede Unicentro (24 horas)</li>
                    <li>Sede Usaquen</li>
                    <li>Sede Rosales</li>
                    <li>Sede 106</li>
                    <li>Sede contador (Nueva)</li>
                </ul> 
                
            </article>
            
            <article className="cajai">
                <i className="fas fa-mobile-alt"></i>
                <h5>Lineas de Atención</h5>
                <ul><li>1234567</li>
                    <li>1234567</li>
                    <li>1234567</li>
                    <li>1234567</li>
                    <li>1234567</li>
                    <li>1234567</li>
                </ul>
            </article>
            
            <article className="cajai">
                <i className="far fa-envelope-open"></i>
                <h5>Sedes</h5>
                <ul>
                    <li>info@veterinaria.com</li>
                    <li>veterinaria1@veterinaria.com</li>
                    <li>veterinaria2@veterinaria.com</li>
                </ul>
            </article>
        </div>
    </section>
   
  );
}

export default Footer;
