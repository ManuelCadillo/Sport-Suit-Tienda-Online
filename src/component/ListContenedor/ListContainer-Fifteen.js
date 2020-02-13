import React,{Component} from 'react';

import { Carousel} from 'react-bootstrap';

import InfoContainerFifteen from '../InfoContenedor/InfoContainer-Fifteen.js';


import './ListContainer.css';

class ListContainerFifteen extends Component{
render(){
return (
<div>
<InfoContainerFifteen/>

<Carousel className='class-one'>
<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/jskckg1568687160480.jpg"
alt="First slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-two"
src="https://li0.rightinthebox.com/images/384x500/201909/qbpvla1568687161138.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-three"
src="https://li0.rightinthebox.com/images/384x500/201909/npgdqd1568687161764.jpg"
alt="Third slide"/>
</Carousel.Item>


<Carousel.Item>
<img
className="d-one"
src="https://li0.rightinthebox.com/images/384x500/201909/gnhpaq1568687159757.jpg"
alt="First slide"/>
</Carousel.Item>



</Carousel>


</div>
);
}}





export default ListContainerFifteen;