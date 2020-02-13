import React ,{Component}from 'react';

//Import Component
import ListContainerEight from '../component/ListContenedor/ListContainer-Eight.js';
import LightboxEight  from '../component/ContenedorLightBox/Lightbox-Eight.js';

//Import Css
import './Pages.css';


//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class PagesEight  extends Component{
render(){    
return(
<MDBView>
<img src="https://c.pxhere.com/photos/5a/cb/new_york_empire_state_building_sky_city_urban_manhattan_empire_landmark-334733.jpg!d"  className='img-fluid-one' alt="photos"/>
<MDBMask>


<LightboxEight/>
<ListContainerEight/>

</MDBMask>
</MDBView>
);
}
}

export default PagesEight;