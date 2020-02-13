import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesTwo from '../ContainerRatings/Calificacion-Two.js';

import TallaRopaTwo from '../ContenedorRopa/TallaRopa-Two.js';


class InfoContainerTwo extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Fiesta / Trabajo Básico Primavera & Otoño Corto Chaleco, A Lunares Bestias fantasticas Escote en Pico Manga Corta Poliéster Negro / Gris / Caqui / Informal de negocios / Delgado</strong>
</MDBTypography>

<CalificacionesTwo/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaTwo/>
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

export default InfoContainerTwo;