import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesFive from '../ContainerRatings/Calificacion-Five.js';

import TallaRopaFive from '../ContenedorRopa/TallaRopa-Five.js';


class InfoContainerFive extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Diario Básico Otoño / Invierno Regular Chaleco, Cuadros / A Cuadros Escote en Pico Sin Mangas Licra Marrón / Gris</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesFive/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaFive/>
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

export default InfoContainerFive;