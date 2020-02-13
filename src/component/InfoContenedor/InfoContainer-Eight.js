import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesEight from '../ContainerRatings/Calificacion-Eight.js';

import TallaRopaEight from '../ContenedorRopa/TallaRopa-Eight.js';


class InfoContainerEight extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Chaleco, Un Color Escote en Pico / Escote Chino Rayón / Nailon / Licra Negro / Azul Piscina / Caqui</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesEight/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaEight/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$2.049,79</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerEight;