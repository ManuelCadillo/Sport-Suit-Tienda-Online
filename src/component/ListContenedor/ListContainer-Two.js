import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerTwo from '../InfoContenedor/InfoContainer-Two.js';

import './ListContainer.css';

class ListContainerTwo extends Component{
render(){
return (
<div>
<InfoContainerTwo/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/umvlwo1534758701806.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201808/lkllsv1534758702821.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201808/eggeft1534758704417.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/rzfoon1534758703610.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerTwo;