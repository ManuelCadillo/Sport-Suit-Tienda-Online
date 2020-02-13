import React ,{Component}from 'react';

//Import Component
import ListContainerEleven from '../component/ListContenedor/ListContainer-Eleven.js';
import LightboxEleven  from '../component/ContenedorLightBox/Lightbox-Eleven.js';

//Import Css
import './Pages.css';


//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class PagesEleven  extends Component{
render(){    
return(
<MDBView>
<img src="https://c.pxhere.com/photos/5a/cb/new_york_empire_state_building_sky_city_urban_manhattan_empire_landmark-334733.jpg!d"  className='img-fluid-one' alt="photos"/>
<MDBMask>


<LightboxEleven/>
<ListContainerEleven/>

</MDBMask>
</MDBView>
);
}
}

export default PagesEleven ;