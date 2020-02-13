import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesTwelve from '../ContainerRatings/Calificacion-Twelve.js';

import TallaRopaTwelve from '../ContenedorRopa/TallaRopa-Twelve.js';


class InfoContainerTwelve extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Talla EU / US Chaleco Escote en Pico Poliéster Wine / Azul claro / Caqui / Delgado</strong>
</MDBTypography>

<CalificacionesTwelve/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaTwelve/>
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

export default InfoContainerTwelve;