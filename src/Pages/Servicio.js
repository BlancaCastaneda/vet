import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Servicios from "../components/servicios/Servicios";

function Servicio(){
    return(
        <div className="container">
        <Header />
        <Nav />
        <Servicios />
        <Footer />
           
        </div>
    );
}

export default Servicio;