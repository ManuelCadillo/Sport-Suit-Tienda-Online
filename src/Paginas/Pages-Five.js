import React ,{Component}from 'react';

//Import Component
import ListContainerFive from '../component/ListContenedor/ListContainer-Five.js';
import LightboxFive from '../component/ContenedorLightBox/Lightbox-Five.js';

//Import Css
import './Pages.css';


//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class PagesFive extends Component{
render(){    
return(
<MDBView>
<img src="https://c.pxhere.com/photos/5a/cb/new_york_empire_state_building_sky_city_urban_manhattan_empire_landmark-334733.jpg!d"  className='img-fluid-one' alt="photos"/>
<MDBMask>


<LightboxFive/>
<ListContainerFive/>

</MDBMask>
</MDBView>
);
}
}

export default PagesFive;