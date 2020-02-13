import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerTen from '../InfoContenedor/InfoContainer-Ten.js';


import './ListContainer.css';

class ListContainerTen extends Component{
render(){
return (
<div>
<InfoContainerTen/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/ytkmka1534758674054.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201808/yvuqit1534758675117.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201808/bmevdg1534758681388.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/dwdesj1534758679195.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerTen;