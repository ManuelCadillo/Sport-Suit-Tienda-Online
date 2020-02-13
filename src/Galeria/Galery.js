import React ,{Component}from 'react';

//Import Component
import PaperOne from '../component/Paper-One.js';
import PaperTwo from '../component/Paper-Two.js';
import PaperThree from '../component/Paper-Three.js';

//Import Css
import  './Galery.css'

//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class Galery extends Component{
render(){    
return(

<MDBView>
<img src="https://images.unsplash.com/photo-1493928841026-e1ab0a590a61?ixlib=rb-1.2.1&w=1000&q=80"  className='img-fluid-four' alt="photos" />
<MDBMask>

<PaperOne/>
<PaperTwo/>
<PaperThree/>

</MDBMask>
</MDBView>

);
}
}

export default Galery;