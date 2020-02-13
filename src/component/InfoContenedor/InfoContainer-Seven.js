import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesSeven from '../ContainerRatings/Calificacion-Seven.js';

import TallaRopaSeven from '../ContenedorRopa/TallaRopa-Seven.js';


class InfoContainerSeven extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Trabajo Primavera / Otoño Regular Chaleco, Un Color / Estampado Floral Escote en Pico Sin Mangas Algodón / Poliéster Negro / Rojo / Gris Claro / Informal de negocios</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesSeven/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaSeven/>
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

export default InfoContainerSeven;