import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesNine from '../ContainerRatings/Calificacion-Nine.js';

import TallaRopaNine from '../ContenedorRopa/TallaRopa-Nine.js';


class InfoContainerNine extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Chaleco, Cuadrícula Escote en Pico Poliéster Negro / Gris Oscuro / Azul Marino</strong>
</MDBTypography>

<CalificacionesNine/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaNine/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$1.885,76</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerNine;