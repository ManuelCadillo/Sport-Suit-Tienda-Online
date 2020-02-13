import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerThree from '../InfoContenedor/InfoContainer-Three.js';


import './ListContainer.css';

class ListContainerThree extends Component{
render(){
return (
<div>
<InfoContainerThree/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201912/vvbpal1576032217274.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201912/yklbzj1576032217777.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201912/qusmwb1576032218047.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201912/ognple1576032217514.jpg"
alt="First slide"/>
</Carousel.Item>

</Carousel>


</div>
);
}}





export default ListContainerThree;