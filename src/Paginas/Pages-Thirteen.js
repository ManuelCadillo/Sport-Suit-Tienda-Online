import React ,{Component}from 'react';

//Import Component
import ListContainerThirteen from '../component/ListContenedor/ListContainer-Thirteen.js';
import LightboxThirteen from '../component/ContenedorLightBox/Lightbox-Thirteen.js';

//Import Css
import './Pages.css';


//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class PagesThirteen extends Component{
render(){    
return(
<MDBView>
<img src="https://c.pxhere.com/photos/5a/cb/new_york_empire_state_building_sky_city_urban_manhattan_empire_landmark-334733.jpg!d"  className='img-fluid-one' alt="photos"/>
<MDBMask>


<LightboxThirteen/>
<ListContainerThirteen/>

</MDBMask>
</MDBView>
);
}
}

export default PagesThirteen;