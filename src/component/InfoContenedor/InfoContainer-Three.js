import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesThree from '../ContainerRatings/Calificacion-Three.js';

import TallaRopaThree from '../ContenedorRopa/TallaRopa-Three.js';


class InfoContainerThree extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Chaleco, Houndstooth Solapa de Pico Poliéster Negro / Marrón</strong>
</MDBTypography>

<CalificacionesThree/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaThree/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$2.131,81</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerThree;