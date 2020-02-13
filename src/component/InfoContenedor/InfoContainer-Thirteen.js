import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesThirteen from '../ContainerRatings/Calificacion-Thirteen.js';

import TallaRopaThirteen from '../ContenedorRopa/TallaRopa-Thirteen.js';


class InfoContainerThirteen extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Chaleco, Un Color Escote en Pico Rayón / Nailon / Licra Negro / Blanco / Gris Oscuro</strong>
</MDBTypography>

<CalificacionesThirteen/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaThirteen/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$2.213,83</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerThirteen;