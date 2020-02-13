import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesFourteen from '../ContainerRatings/Calificacion-Fourteen.js';

import TallaRopaFourteen from '../ContenedorRopa/TallaRopa-Fourteen.js';


class InfoContainerFourteen extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Fiesta / Diario Negocios / Básico Otoño / Invierno Regular Chaleco, Un Color Bestias fantasticas Escote en Pico Sin Mangas Algodón / Poliéster Negro / Azul Marino / Caqui / Delgado</strong>
</MDBTypography>

<CalificacionesFourteen/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaFourteen/>
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

export default InfoContainerFourteen;