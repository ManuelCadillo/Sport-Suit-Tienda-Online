import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerFive from '../InfoContenedor/InfoContainer-Five.js';


import './ListContainer.css';

class ListContainerFive extends Component{
render(){
return (
<div>
<InfoContainerFive/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201807/ajzplz1532410149119.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201808/zfpxbu1533189760422.jpg"
alt="Third slide"/>
</Carousel.Item>



<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201807/fxgaus1532410158951.jpg"
alt="First slide"/>
</Carousel.Item>



<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201807/zricnz1532410154046.jpg"
alt="Third slide"/>
</Carousel.Item>



</Carousel>


</div>
);
}}





export default ListContainerFive;