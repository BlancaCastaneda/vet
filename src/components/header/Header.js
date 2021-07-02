import logo from './Logov.jpeg';
import './Header.css';
import ModalLogin from './ModalLogin';

function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo} className="img-fluid"/>
        </div>
        
        <div className="botones">
                <button className="btn-azul" data-bs-toggle="modal" data-bs-target="#login" ><i className="fas fa-power-off" ></i> Ingresar</button>
                <button className="registro"><i className="fas fa-user-plus"></i> Registrarse</button>
            </div>
       <ModalLogin />       
    </header>
  );
}

export default Header;
