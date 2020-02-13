import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerOne from '../InfoContenedor/InfoContainer-One.js';


import './ListContainer.css';

class ListContainerOne extends Component{
render(){
return (
<div>
<InfoContainerOne/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201803/rdpvea1522392400950.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201803/ajgllq1522392414110.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201803/tprfiy1522392412372.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201803/slvkin1522392400987.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerOne;