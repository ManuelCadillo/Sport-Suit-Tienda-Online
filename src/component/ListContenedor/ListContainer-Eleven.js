import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerEleven from '../InfoContenedor/InfoContainer-Eleven.js';


import './ListContainer.css';

class ListContainerEleven extends Component{
render(){
return (
<div>
<InfoContainerEleven/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201908/betyol1565259073625.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201908/xmaibf1565259075343.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201908/amnqft1565259072183.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201908/opgolb1565259069666.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerEleven;