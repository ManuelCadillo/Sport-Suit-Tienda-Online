import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesSix from '../ContainerRatings/Calificacion-Six.js';

import TallaRopaSix from '../ContenedorRopa/TallaRopa-Six.js';


class InfoContainerSix extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Trabajo Negocios Otoño / Invierno Regular Chaleco, Un Color Escote en Pico Sin Mangas Acrílico / Poliéster Blanco / Negro / Wine / Delgado</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesSix/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaSix/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$1.803,74</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerSix;