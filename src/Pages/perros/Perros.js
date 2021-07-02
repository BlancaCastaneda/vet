import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import {perros} from '../../components/perros/Perros.json';
import Razas from '../../components/perros/Razas';

function Perros() {
  return (
    <div className="container-fluid">
      <Header />
      <Nav />
      <div className="row">
        <h1>Nuestras Mascotas</h1>

      {
        perros.map(perro=>(
            <div className="col-12 col-md-4" key={perro.id}>
              <Razas p1={perro.id} p2={perro.thumbnail} p3={perro.raza} p4={perro.descripcion} p5={perro.acercade} p6={perro.imagen}/>
            </div>
        ))
      }
      </div>
      <Footer />
    </div>   
  );
}

export default Perros;
