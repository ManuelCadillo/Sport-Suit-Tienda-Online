import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerSix from '../InfoContenedor/InfoContainer-Six.js';


import './ListContainer.css';

class ListContainerSix extends Component{
render(){
return (
<div>
<InfoContainerSix/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201901/qvpibf1546591720595.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201901/kfnyjx1546591723510.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201901/couags1546591724203.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201901/cvzloy1546591722136.jpg"
alt="Third slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerSix;