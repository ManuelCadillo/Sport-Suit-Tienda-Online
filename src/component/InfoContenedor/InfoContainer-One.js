import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesOne from '../ContainerRatings/Calificaciones-One.js';

import TallaRopaOne from '../ContenedorRopa/TallaRopa-One.js';


class InfoContainerOne extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Diario / Festivos Vintage Primavera / Otoño Tallas Grandes Regular Chaleco, A Cuadros Cuello Camisero Sin Mangas Poliéster Marrón / Gris Oscuro / Gris Claro / Delgado </strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesOne/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaOne/>
<p className='Class-Miyubi'>Precio: Disponible</p>
<p className='Class-Miyubi'>$2.928,01</p>
<Container className='Class-Yami'>
<MDBBtn gradient="purple">Comprar Ahora</MDBBtn>
</Container>   
</Jumbotron> 
</Container>   
)    
}    
}

export default InfoContainerOne;

