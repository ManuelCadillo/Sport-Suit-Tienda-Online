import React ,{Component} from 'react';
import './App.css';

import {Switch, Route,HashRouter } from 'react-router-dom';

//Import Usuario
import Login from './Usuario/Login.js';

//Import Galeria
import Galery from './Galeria/Galery.js';

//Import Paginas
import PaginaOne from './Paginas/Pages-One.js';
import PaginaTwo from './Paginas/Pages-Two.js';
import PaginaThree from './Paginas/Pages-Three.js';
import PaginaFour from './Paginas/Pages-Four.js';
import PaginaFive from './Paginas/Pages-Five.js';
import PaginaSix from './Paginas/Pages-Six.js';
import PaginaSeven from './Paginas/Pages-Seven.js';
import PaginaEight from './Paginas/Pages-Eight.js';
import PaginaNine from './Paginas/Pages-Nine.js';
import PaginaTen from './Paginas/Pages-Ten.js';
import PaginaEleven from './Paginas/Pages-Eleven.js';
import PaginaTwelve from './Paginas/Pages-Twelve.js';
import PaginaThirteen from './Paginas/Pages-Thirteen.js';
import PaginaFourteen from './Paginas/Pages-Fourteen.js';
import PaginaFifteen from './Paginas/Pages-Fifteen.js';

class App extends Component{    
render(){
return(
<HashRouter>
<Switch>
<Route exact path="/" component={Login}/>
<Route exact path="/Galeria" component={Galery}/> 
<Route exact path="/Pagina-One" component={PaginaOne}/>
<Route exact path="/Pagina-Two" component={PaginaTwo}/>
<Route exact path="/Pagina-Three" component={PaginaThree}/> 
<Route exact path="/Pagina-Four" component={PaginaFour}/>
<Route exact path="/Pagina-Five" component={PaginaFive}/>
<Route exact path="/Pagina-Six" component={PaginaSix}/>
<Route exact path="/Pagina-Seven" component={PaginaSeven}/> 
<Route exact path="/Pagina-Eight" component={PaginaEight}/>  
<Route exact path="/Pagina-Nine" component={PaginaNine}/>
<Route exact path="/Pagina-Ten" component={PaginaTen}/>
<Route exact path="/Pagina-Eleven" component={PaginaEleven}/> 
<Route exact path="/Pagina-Twelve" component={PaginaTwelve}/> 
<Route exact path="/Pagina-Thirteen" component={PaginaThirteen}/>
<Route exact path="/Pagina-Fourteen" component={PaginaFourteen}/> 
<Route exact path="/Pagina-Fifteen" component={PaginaFifteen}/>   
</Switch>
</HashRouter>

);   
}    
}

export default App;
