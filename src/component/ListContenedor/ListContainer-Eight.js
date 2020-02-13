import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerEight from '../InfoContenedor/InfoContainer-Eight.js';


import './ListContainer.css';

class ListContainerEight extends Component{
render(){
return (
<div>
<InfoContainerEight/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/njfmot1568020989813.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201909/npwjcr1568020992011.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201909/czwtfh1568020997263.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/cexrao1568020993792.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerEight;