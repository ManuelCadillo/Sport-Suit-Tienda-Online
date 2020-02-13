import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerTwelve from '../InfoContenedor/InfoContainer-Twelve.js';


import './ListContainer.css';

class ListContainerTwelve extends Component{
render(){
return (
<div>
<InfoContainerTwelve/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201908/qdqpnv1565259069718.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201908/heybum1565259071090.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201908/jooegg1565259077267.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201908/zhucgr1565259075419.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerTwelve;