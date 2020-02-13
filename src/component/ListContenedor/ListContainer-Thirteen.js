import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerThirteen from '../InfoContenedor/InfoContainer-Thirteen.js';


import './ListContainer.css';

class ListContainerThirteen extends Component{
render(){
return (
<div>
<InfoContainerThirteen/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/pmbulh1568888381830.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201909/vwutgh1568888385304.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201909/uswzcu1568888403130.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/vuiogo1568888400539.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerThirteen;