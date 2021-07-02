import React from 'react';
import './Error404.css';

function Error404(){
    return(
        <div className="container__page404">
            <h2 className='title__404'>Esta página no esta disponible</h2>
            <p>
                Es posible que el enlace que seleccionaste este dañado o se haya eliminado la página.
            </p>
            
            
            <br />
            <a href='/' className='link__404'>
                Volver a Animalandia
            </a>
        </div>
    );
}

export default Error404;