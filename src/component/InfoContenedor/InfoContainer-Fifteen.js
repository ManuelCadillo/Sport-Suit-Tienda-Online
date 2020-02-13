import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesFifteen from '../ContainerRatings/Calificacion-Fifteen.js';

import TallaRopaFifteen from '../ContenedorRopa/TallaRopa-Fifteen.js';


class InfoContainerFifteen extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Chaleco, A Lunares Escote en Pico Poliéster Negro / Blanco / Azul Marino</strong>
</MDBTypography>

<CalificacionesFifteen/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaFifteen/>
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

export default InfoContainerFifteen;