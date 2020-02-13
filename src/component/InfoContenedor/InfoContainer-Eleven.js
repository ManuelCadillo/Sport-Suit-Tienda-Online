import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesEleven from '../ContainerRatings/Calificacion-Eleven.js';

import TallaRopaEleven from '../ContenedorRopa/TallaRopa-Eleven.js';


class InfoContainerEleven extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Talla EU / US Chaleco, Floral Escote en Pico Poliéster Negro / Caqui / Delgado</strong>
</MDBTypography>

<CalificacionesEleven/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaEleven/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$1.639,71</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerEleven;