import React ,{Component} from 'react';

import { Jumbotron,Container} from 'react-bootstrap';

import './InfoContainer.css';

import { MDBBtn,MDBTypography} from "mdbreact";

import CalificacionesTen from '../ContainerRatings/Calificacion-Ten.js';

import TallaRopaTen from '../ContenedorRopa/TallaRopa-Ten.js';


class InfoContainerTen extends Component{
render(){   
return(
<Container className='Class-Momo'>  
<Jumbotron className='Class-Nana'>
<MDBTypography tag='h4' className='Class-Lala'>
<strong>Hombre Festivos / Noche Activo / Básico Primavera & Otoño Corto Chaleco, A Lunares Escote en Pico Sin Mangas Algodón / Lino Negro / Gris / Caqui / Delgado</strong>
<small className="text-muted">    </small>
</MDBTypography>

<CalificacionesTen/>

<p className='Class-Kuro'>Talla: Disponible</p>
<TallaRopaTen/>
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

export default InfoContainerTen;