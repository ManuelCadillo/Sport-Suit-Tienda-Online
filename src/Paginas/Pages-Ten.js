import React ,{Component}from 'react';

//Import Component
import ListContainerTen from '../component/ListContenedor/ListContainer-Ten.js';
import LightboxTen from '../component/ContenedorLightBox/Lightbox-Ten.js';

//Import Css
import './Pages.css';


//Material-UI



//React Bootstrap Material Design
import { MDBMask, MDBView} from "mdbreact";


class PagesTen extends Component{
render(){    
return(
<MDBView>
<img src="https://c.pxhere.com/photos/5a/cb/new_york_empire_state_building_sky_city_urban_manhattan_empire_landmark-334733.jpg!d"  className='img-fluid-one' alt="photos"/>
<MDBMask>


<LightboxTen/>
<ListContainerTen/>

</MDBMask>
</MDBView>
);
}
}

export default PagesTen;