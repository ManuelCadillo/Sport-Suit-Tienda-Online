import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesFour from '../ContainerRatings/Calificacion-Four.js';

import TallaRopaFour from '../ContenedorRopa/TallaRopa-Four.js';


class InfoContainerFour extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Talla EU / US Chaleco, Un Color Escote en Pico Algodón Negro / Blanco / Gris Oscuro</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesFour/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaFour/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$1.967,78</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerFour;