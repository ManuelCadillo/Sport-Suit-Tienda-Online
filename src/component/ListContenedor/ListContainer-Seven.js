import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerSeven from '../InfoContenedor/InfoContainer-Seven.js';


import './ListContainer.css';

class ListContainerSeven extends Component{
render(){
return (
<div>
<InfoContainerSeven/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201803/swnsep1520493406238.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201803/cjlide1520493413148.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201803/qsaydr1520493416543.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201803/cajfsl1520493392477.jpg"
alt="First slide"/>
</Carousel.Item>




</Carousel>


</div>
);
}}





export default ListContainerSeven;