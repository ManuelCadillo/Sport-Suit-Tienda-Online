import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerNine from '../InfoContenedor/InfoContainer-Nine.js';


import './ListContainer.css';

class ListContainerNine extends Component{
render(){
return (
<div>
<InfoContainerNine/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201912/sgafsn1576042877453.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201912/xuuhnn1576042879659.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201912/fyiqal1576042884997.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201912/utavse1576042883244.jpg"
alt="First slide"/>
</Carousel.Item>



</Carousel>


</div>
);
}}





export default ListContainerNine;