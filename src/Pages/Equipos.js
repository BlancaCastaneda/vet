import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Equipo from "../components/equipo/Equipo";

function Equipos(){
    return(
        <div className="container">
            <Header />
            <Nav />
            <Equipo />
            <Footer />
        </div>
    );
}

export default Equipos;