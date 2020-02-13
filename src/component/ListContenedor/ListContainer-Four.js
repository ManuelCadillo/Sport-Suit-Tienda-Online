import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerFour from '../InfoContenedor/InfoContainer-Four.js';


import './ListContainer.css';

class ListContainerFour extends Component{
render(){
return (
<div>
<InfoContainerFour/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201906/jvwxvr1561444795765.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201906/fbwthg1561444798935.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201912/ajs1576204375905.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201906/jvwxvr1561444795765.jpg"
alt="First slide"/>
</Carousel.Item>




</Carousel>


</div>
);
}}





export default ListContainerFour;