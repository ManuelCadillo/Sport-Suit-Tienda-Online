import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerFourteen from '../InfoContenedor/InfoContainer-Fourteen.js';


import './ListContainer.css';

class ListContainerFourteen extends Component{
render(){
return (
<div>
<InfoContainerFourteen/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/ncxrpi1535540950422.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201808/jlwwnk1535540951488.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201808/mgbbdu1535540955053.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201808/agutzx1535540954087.jpg"
alt="First slide"/>
</Carousel.Item>


</Carousel>


</div>
);
}}





export default ListContainerFourteen;